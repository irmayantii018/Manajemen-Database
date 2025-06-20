const database = 'DatabaseManagement';
const collection = 'UAS_MANAJEMEN';


use(database);


db.createCollection(collection); 
db[collection].bulkWrite([
  {
    insertOne: {
      document: {
        
        judul: "Dasar Pemrograman",
        penulis: "Andi Hakim",
        tahun: 2022,
        kategori: "Pendidikan",
        tersedia: true,
        stok: 8,
        rating: 4.0
      }
    }
  },
  {
    updateOne: {
      filter: { judul: "Manajemen Basis Data" },
      update: { $set: { stok: 20 } }
    }
  }
]);

