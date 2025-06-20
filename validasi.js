const database = 'DatabaseManagement';
const collection = 'UAS_MANAJEMEN validasi';

use(database);

db.createCollection(collection, {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "judul", "penulis", "tahun", "kategori", "stok" ],
      properties: {
        judul: { bsonType: "string" },
        penulis: { bsonType: "string" },
        tahun: { bsonType: "int", minimum: 1900, maximum: 2100 },
        kategori: { bsonType: "string" },
        stok: { bsonType: "int", minimum: 0 },
        tersedia: { bsonType: "bool" },
        rating: { bsonType: ["double", "null"] }
      }
    }
  }
});
