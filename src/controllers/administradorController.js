const administrador = require('../models/administrador');

class AdministradorController {

    registrar(req, res) {

        administrador.create(req.body, (error, data)=> {
            if(error) {
                res.status(400).json({error})
            } else {
                res.status(201).json(data);
            }
        });
    }

    obtenerAdministradores(req, res) {
        administrador.find((error, data)=> {
            if(error) {
                res.status(500).json({message: "error"});
            } else {
                res.status(200).json(data);
            }
        });
    }

    actualizarAdministrador(req, res) {
        let{id, nombre, apellido, cedula, telefono, email, edad} = req.body;
        let obj = {
            nombre, apellido, cedula, telefono, email, edad
        }

        administrador.findByIdAndUpdate(id, {
            $set: obj
        }, (error, data)=> {
            if(error) {
                res.status(500).json({error});
            } else {
                res.status(200).json(data);
            }
        });
    }

    eliminarAdministrador(req, res) {
        let{id} = req.body;

        administrador.findByIdAndRemove(id, (error, data)=> {
            if(error) {
                res.status(500).json({error});
            } else {
                res.status(200).json(data);
            }
        });
    }



}

module.exports = AdministradorController;