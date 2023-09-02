# Merkler Test

Detail Project :
- DB : MySQL
- Backend : Express

Cara Menjalankan Project

Setup Awal
1. Clone Github Dari https://github.com/Kitsuzune/Merkler-Test.git
2. ketikan npm i hingga semua package terinstall

Setup DB
3. Buat Nama Db "merkler" pada phpmyadmin/xampp/sql server
   ketikan npx sequelize-cli db:migrate.
    jika terdapat error karena type module, Buka package.json lalu hapus "type": "module", pada line 12, 
    Lalu Ketikan npx sequelize-cli db:migrate sekali lagi.
    Jika berhasil tambahkan kembali type": "module", pada line 12

    Atau Jika tidak mau ribet, export db yang sudah ada di email ke mysql dengan nama db "merkler" pada phpmyadmin/xampp/sql server

Setup Endpoint
4. Buka Postman atau Sejenisnya Dan Import MErkler.postman_collection.json yang sudah disiapkan di repository

Running Project
5. Berikut adalah Detail Endpoint Dari Setiap Test

- Soal No 1
    localhost:5000/merkler/guest -> get

- Soal No 2
    A. Guest Form - Tambahkan guest baru
        Metode: POST
        Endpoint: localhost:5000/merkler/guest
        Request Body: Data tamu baru, seperti nama, alamat, nomor_telepon, dan catatan. Tampilkan Semua Catatan Tamu

    B. Note Gallery - Tampilkan semua catatan guest
        Metode: GET
        Endpoint: localhost:5000/merkler/note-gallery
        Soal No 2 - Autentikasi

    C. Autentikasi - Login dan Logout
        Metode: POST
        Endpoint: localhost:5000/merkler/login
        Request Body: Data login, seperti username dan password

        Metode: POST   
        Endpoint: localhost:5000/merkler/logout

    D. Admin - Kelola data guest
        Metode: GET
        Endpoint: localhost:5000/merkler/admin
        Memerlukan autentikasi admin untuk akses.
        Tampilkan Data Tamu Berdasarkan ID

        Metode: GET
        Endpoint: localhost:5000/merkler/admin/:id
        Memerlukan autentikasi admin untuk akses.
        Gantilah :id dengan ID tamu yang ingin Anda akses.
        Update Data Tamu Berdasarkan ID

        Metode: PUT
        Endpoint: localhost:5000/merkler/admin/:id
        Memerlukan autentikasi admin untuk akses.
        Gantilah :id dengan ID tamu yang ingin Anda perbarui.
        Request Body: Data yang ingin Anda perbarui, seperti nama, alamat, nomor_telepon, dan catatan.
        Hapus Data Tamu Berdasarkan ID

        Metode: DELETE
        Endpoint: localhost:5000/merkler/admin/:id
        Memerlukan autentikasi admin untuk akses.
        Gantilah :id dengan ID tamu yang ingin Anda hapus.
