const database = 'DatabaseManagement';
const collection = 'UAS_MANAJEMEN';


use(database);


db.createCollection(collection); 

db[collection].aggregate([
    {
        $group: {
            _id: "$kategori",
            totalStok: { $sum: "$stok" },
            rataRating: {$avg: "$rating"}
        }
    }
]);