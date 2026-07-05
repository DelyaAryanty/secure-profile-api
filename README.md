## Cara Instalasi
1. ekstrak file ZIP.
2. Masuk ke folder project.
```bash
cd secure-profile-api
```
3. Install dependency.
```bash
npm install
```
4. Buat file `.env` pada root project dan isi dengan konfigurasi berikut.
```env
PORT=3000
NODE_ENV=development
JWT_SECRET=ganti_dengan_kunci_rahasia_panjang_dan_unik
JWT_EXPIRES_IN=1h
CLIENT_ORIGIN=http://localhost:5173
```

## Cara Menjalankan Server
Mode development:
```bash
npm run dev
```
Mode production:
```bash
npm start
```
Server akan berjalan pada:
```
http://localhost:3000
```
# Daftar Endpoint

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/health` | Mengecek status server |
| POST | `/api/auth/register` | Registrasi pengguna |
| POST | `/api/auth/login` | Login pengguna |
| GET | `/api/users/me` | Menampilkan data pengguna yang sedang login |
| GET | `/api/users` | Menampilkan seluruh data pengguna |
| GET | `/api/users/count` | Menampilkan jumlah pengguna |