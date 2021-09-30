const mongoose = require('mongoose');
const database = require('./urlDataBase');

class DbConnection {

    constructor() {
        mongoose.connect(database.db).then(()=> {
            console.log("Conexión exitosa a mongoDb");
        }).catch(error => {
            console.log(error)
        });
    }
}

module.exports = DbConnection;