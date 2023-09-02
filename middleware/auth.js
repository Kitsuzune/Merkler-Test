
function auth(req, res, next) {
    if (req.session.loggedIn) {
      // Jika pengguna telah login, lanjutkan ke operasi CRUD
      next();
    } else {
      // Jika pengguna belum login, kirim respons error
        res.status(401).json({ error: 'Anda bukan admin, login terlebih dahulu di /merkler.login (Soal 2 C Login)' });
    }
}

export default auth;
