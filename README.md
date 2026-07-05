## Cara Instalasi
1. ekstrak file ZIP.
2. Masuk ke folder project.
3. Install dependency.
npm install
4. Buat file `.env` pada root project dan isi dengan konfigurasi berikut.

PORT=3000

NODE_ENV=development

JWT_SECRET=ganti_dengan_kunci_rahasia_panjang_dan_unik

JWT_EXPIRES_IN=1h

CLIENT_ORIGIN=http://localhost:5173
## Cara Menjalankan Server
Mode development:
1. Buka terminal dan jalankan dengan menuliskan perintah berikut pada terminal
npm run dev
tunggu hingga muncul keterangan seperti dibawah ini
http://localhost:3000
2. lakukan pengujian dengan berbagai skenario
# Daftar Endpoint

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/health` | Mengecek status server |
| POST | `/api/auth/register` | Registrasi pengguna |
| POST | `/api/auth/login` | Login pengguna |
| GET | `/api/users/me` | Menampilkan data pengguna yang sedang login |
| GET | `/api/users` | Menampilkan seluruh data pengguna |
| GET | `/api/users/count` | Menampilkan jumlah pengguna |
