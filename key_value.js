// key_value_model.js
const prompt = require('prompt-sync')(); 
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        const db = client.db("db_key_value"); 
        const collection = db.collection("data"); 

        const jumlah = 5;
        console.log("=== INPUT DATA MODEL KEY-VALUE ===");
        for (let i = 0; i < jumlah; i++) {
            const key = prompt(`Masukkan key ke-${i + 1}: `);
            const value = prompt(`Masukkan value untuk key "${key}": `);
            await collection.insertOne({ key: key, value: value });
        }

        const hasil = await collection.find().toArray();
        console.log("\nData berhasil dimasukkan:");
        console.table(hasil);
    } catch (err) {
        console.error("Terjadi kesalahan:", err);
    } finally {
        await client.close();
    }
}

main();
