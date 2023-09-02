import express from 'express';
const router = express.Router();
import * as soal2Controller from '../controllers/soal2.js';

// a. Guest Form - Tambahkan guest baru
router.post('/guest', soal2Controller.addGuest);

// b. Note Gallery - Tampilkan semua catatan guest
router.get('/note-gallery', soal2Controller.getAllNotes);

// c. Autentikasi - Login dan Logout
router.post('/login', soal2Controller.login);
router.post('/logout', soal2Controller.logout);

// d. Admin - Kelola data guest
router.get('/admin', soal2Controller.getAllGuests);
router.get('/admin/:id', soal2Controller.getGuestById);
router.put('/admin/:id', soal2Controller.updateGuest);
router.delete('/admin/:id', soal2Controller.deleteGuest);

export default router;
