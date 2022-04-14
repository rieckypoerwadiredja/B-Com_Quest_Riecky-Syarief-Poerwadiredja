# DigitalAgent

DigitalAgent merupakan perusahaan yang memecahkan masalah dan menyajikan pengalaman digital yang berdampak bagi pengguna. Perusahaan juga membuat produk digital dengan tujuan memberikan yang terbaik kepada pengguna.

## Description

Projek ini adalah website yang dibuat untuk pemenuhan tugas Pelatihan Bahasa Pemogramam Golang BNCC Community yang diselengarakan bersama Gojek

## Tentang Projek

### Teknologi yang Digunakan

* HTML
* CSS
* JavaScript
* Node JS
* MongoDB
<br>

* [Express](https://www.npmjs.com/package/express)
* [EJS](https://www.npmjs.com/package/ejs)
* [express-ejs-layouts](https://www.npmjs.com/package/express-ejs-layouts)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Mongoose (version : 5.12.13)](https://www.npmjs.com/package/mongoose)

<br>


### Rencana Projek

Setelah program pelatihan selesai, projek akan dikembangkan kembali dengan fitur yang lebih lengkap. Kemudian untuk melengkapi hasil pelatihan projek ini akan menggunakan Golang sebagai pengganti NodeJS
<br>
<br>

## Executing program (local)

* Install MongoDB

```
https://www.mongodb.com/
```


* Buka cmd dan aktifkan mongodb(for Windows)

```
mongo
```

* Buat database baru dengan nama *company-contact-data* (for Windows)

```
use company-contact-data
```

* Pastikan database sudah berhasil dibuat
```
show dbs
```

* Buat collection data dalam database
```
db.createCollection("subscribes")
```

* Pastikan collection sudah berhasil dibuat
```
show collections
```


* jalankan program dan pastikan semua package sudah terinstall

```
npm start
```
<br>
<br>

## Pengaturan jika ingin mengganti nama database
* Pengaturan nama database

```
mongoose.connect('mongodb://127.0.0.1:27017/NAMA_BARU_DATABASE', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
```

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=DATABASE" />](./utils/db.js)

<br>
<br>
<br>

* Pengaturan nama collection

```
const mongoose = require('mongoose');

// model for subscribe
const Subscribe = mongoose.model('NAMA_BARU_COLECTION', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = Subscribe;
```

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=COLLECTION" />](./model/subscribe.js)


<br>
<br>
<br>

## License

Proyek ini dilisensikan di bawah Lisensi [MIT](./LICENSE.txt) - lihat file LICENSE.txt untuk detailnya
