import Guest from '../models/guest.js';
import User from '../models/admin.js';
import auth from '../middleware/auth.js';

// a. Guest Form - Tambahkan guest baru
export const addGuest = async (req, res) => {
    try {
        const { nama, alamat, nomor_telepon, catatan } = req.body;
        const newGuest = await Guest.create({
            nama,
            alamat,
            nomor_telepon,
            catatan,
        });
        res.status(201).json(newGuest);
    } catch (error) {
        /// tampilkan error
        res.status(500).json({
            error: error.message
        });
    }
};

// b. Note Gallery - Tampilkan semua catatan guest
export const getAllNotes = async (req, res) => {
    try {
        const guests = await Guest.findAll({
            attributes: ['nama', 'catatan'],
        });
        res.json(guests);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil catatan.' });
    }
};

// c. Autentikasi - Login
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Di sini, periksa username dan password dalam database
        const user = await User.findOne({ where: { username, password } });

        if (user) {
            // Simpan status login pengguna dalam sesi
            req.session.loggedIn = true;
            req.session.user = user;

            // Kirim respons login berhasil serta data pengguna
            res.status(200).json({
                status: 'Login berhasil',
                user,
            });
        } else {
            res.status(401).json({ error: 'Autentikasi gagal' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const logout = async (req, res) => {
    try {
        // Hapus sesi pengguna
        req.session.destroy((err) => {
            if (err) {
                res.status(500).json({ error: 'Logout gagal' });
            } else {
                res.clearCookie('sid');
                res.json({ status: 'Logout berhasil' });
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// d. Admin - Kelola data guest
export const getAllGuests = async (req, res) => {
    try {
        // Ambil semua data guest
        const guests = await Guest.findAll();
        res.json(guests);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data guest.' });
    }
};

// Admin - Tampilkan data guest berdasarkan ID
export const getGuestById = async (req, res) => {
    const { id } = req.params;
    try {
        // Cari data guest berdasarkan ID
        const guest = await Guest.findByPk(id);
        if (!guest) {
            res.status(404).json({ error: 'guest tidak ditemukan.' });
        } else {
            res.json(guest);
        }
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data guest.' });
    }
};

// Admin - Update data guest berdasarkan ID
export const updateGuest = async (req, res) => {
    const { id } = req.params;
    try {
        const guest = await Guest.findByPk(id);
        if (!guest) {
            res.status(404).json({ error: 'guest tidak ditemukan.' });
        } else {
            // Update data guest sesuai dengan data yang dikirim dalam permintaan
            await guest.update(req.body);
            res.json(guest);
        }
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan saat mengupdate data guest.' });
    }
};

// Admin - Hapus data guest berdasarkan ID
export const deleteGuest = async (req, res) => {
    const { id } = req.params;
    try {
        const guest = await Guest.findByPk(id);
        if (!guest) {
            res.status(404).json({ error: 'guest tidak ditemukan.' });
        } else {
            // Hapus data guest sesuai dengan ID
            await guest.destroy();
            res.json({ message: 'Data guest telah dihapus.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan saat menghapus data guest.' });
    }
};

