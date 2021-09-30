const mongoose = require('mongoose');

const schema = mongoose.Schema;

var administradorSchema = new schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    cedula: {
        type: String
    },
    telefono: {
        type: String
    }, 
    email: {
        type: String
    },
    edad: {
        type: Number
    }
}, 
    {collection: 'administradores'}
);

module.exports = mongoose.model("Administrador", administradorSchema);