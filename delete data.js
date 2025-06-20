const database = 'DatabaseManagement';
const collection = 'UAS_MANAJEMEN';


use(database);


db.createCollection(collection); 

db[collection].deleteOne({ judul: "sejarah Indonesia"});

db[collection].find();