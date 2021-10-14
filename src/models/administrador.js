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
    email: {
        type: String
    },
    contrasena: {
        type: String
    }
}, 
    {collection: 'administradores'}
);

//eliminar key password
//administradorSchema.methods.toJSON = function(){
//  let user = this;
//  let userObject = user.userObject();
//    delete userObject.contrasena;
//    
//    return userObject;
//}

module.exports = mongoose.model("Administrador", administradorSchema);