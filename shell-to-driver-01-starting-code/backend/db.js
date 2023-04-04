const mongodb = require("mongodb");

const mongoClient= mongodb.MongoClient;
const mongoDbUrl= "mongodb+srv://harshk:ARGUSADMIN@cluster0.6mzr0m3.mongodb.net/shop?retryWrites=true&w=majority";

let _db;

const initDb = callback => {
    if(_db) {
        console.log("Database is already initialized");
        return callback(null, _db);
    }
    mongoClient.connect(mongoDbUrl)
    .then(client => {
        _db = client;
        callback(null, _db);

    })
    .catch(err=> {
        callback(err);
    })
}

const getDb = () => {
    if(!_db){
        throw Error("Database is not initialized!");
    }
    return _db;
}

module.exports = {
    initDb,
    getDb
}