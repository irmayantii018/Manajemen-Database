const database = 'DatabaseManagement';
const collection = 'UAS_MANAJEMEN';


use(database);


db.createCollection(collection); 

db[collection].find({stok: {$lt: 20 }});