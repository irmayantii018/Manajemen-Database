// wide_column_model.js
const prompt = require('prompt-sync')();
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        const db = client.db("db_wide_column");
        const collection = db.collection("students");

        const jumlah = 5;
        console.log("=== INPUT DATA MODEL WIDE-COLUMN ===");
        for (let i = 0; i < jumlah; i++) {
            console.log(`\nData ke-${i + 1}`);
            const nama = prompt("Nama: ");
            const warna = prompt("warna: ");
            const rasa = prompt("Rasa: ");
            const berat = prompt("Berat: ");
            const harga = prompt("harga: ");

            await collection.insertOne({
                nama: nama,
                warna: warna,
                rasa: rasa,
                berat: berat,
                harga: harga
            });
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
