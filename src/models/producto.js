const mongoose = require('mongoose');

const schema = mongoose.Schema;

var productoSchema = new schema({
    nombre: {
        type: String
    },
    precio: {
        type: Number
    },
    imgUrl: {
        type: String
    },
    descripcion: {
        type: String
    }
}, 
    {collection: 'productos'}
);

module.exports = mongoose.model("Producto", productoSchema);  