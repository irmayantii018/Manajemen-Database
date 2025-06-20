const database = 'DatabaseManagement';
const collection = 'UAS_MANAJEMEN';


use(database);


db.createCollection(collection); 



db[collection].find();
db[collection].find({tersedia: false});
