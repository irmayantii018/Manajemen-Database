const database = 'DatabaseManagement';
const collection = 'UAS_MANAJEMEN';


use(database);


db.createCollection(collection); 

db[collection].find(

    {
        $or: [
            {stok: {$gt: 30 }}
        ]

    }
);