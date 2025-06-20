const database = 'DatabaseManagement';
const collection = 'UAS_MANAJEMEN';


use(database);


db.createCollection(collection); 

db[collection].updateOne(
    { judul: "Manajemen Basis Data"},
    {$set: { stok: 40}}
)

db[collection].find();