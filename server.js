// Mengimpor modul Express.js
const express = require('express')

// Menginisialisasi aplikasi Express
const app = express()

// Menentukan port yang akan digunakan
const port = 3000

app.use(express.static(__dirname))

// Penanganan rute untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile("halaman utama.html", {root: __dirname})
})

// Penanganan rute untuk halaman about
app.get('/about', (req, res) => {
    res.sendFile('about.html', {root: __dirname})
})

// Penanganan rute untuk halaman contact
app.get('/contact', (req, res) => {
    res.sendFile('contact.html', {root: __dirname})
})

// Penanganan rute dinamis untuk produk dengan parameter 'id' dan query 'category'
app.get('/product/:id', (req, res) => {
    res.send(`Product id :  ${req.params.id} <br> Category id : ${req.query.Kategori}`)
})

// Penanganan rute untuk permintaan yang tidak cocok dengan rute lainnya (404 Not Found)
app.use('/', (req, res) => {
    res.status(404)
    res.send('page not found: 404')
})

// Server mendengarkan permintaan pada port yang telah ditentukan
app.listen(port, () => {
    // Pesan ini akan dicetak saat server berjalan
    console.log(`Server berjalan di http://localhost:${port}/`) 
})
