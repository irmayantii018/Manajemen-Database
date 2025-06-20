


const database = 'DatabaseManagement';
const collection = 'UAS_MANAJEMEN';


use(database);


db.createCollection(collection);

db[collection].insertMany([
    {
        judul: "Belajar MongoDB",
        penulis: "Dian Saputra",
        tahun: 2023,
        kategori: "Teknologi",
        tersedia: true,
        stok: 12,
        rating: 4.5
    },
    {
        judul: "Manajemen Basis Data",
        penulis: "Arbain",
        tahun: "2025",
        kategori: "Informatika",
        tersedia: false,
        stok: 24,
        rating: 5.0
    },
    {
        judul: "sejarah Indonesia",
        penulis: "Soekarno Hatta",
        tahun: "1945",
        kategori: "Proklamasi",
        tersedia: false,
        stok: 5,
        rating: 4.9
    }
]);
