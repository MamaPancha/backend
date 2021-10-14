const administrador = require('../models/administrador');
const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');


class AdministradorController {

    /*registrar(req, res) {

        administrador.create(req.body, (error, data)=> {
            if(error) {
                res.status(400).json({error})
            } else {
                res.status(201).json(data);
            }
        });
    }*/

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
        let{id, nombre, apellido, cedula, email, contrasena} = req.body;
        let obj = {
            nombre, apellido, cedula, email, contrasena
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

    registrar(req, res) {

        let body = req.body;
        let { nombre, apellido, cedula, email, contrasena } = body;

        let usuario = new administrador({
            nombre,
            apellido, 
            cedula,
            email,
            contrasena : bcrypt.hashSync(contrasena, 10)
        })

        usuario.save((err, usuarioDB) => {
            if (err){
                return res.status(400).json({
                    ok : false,
                    err,
                })
            }
            res.json({
                ok: true,
                usuario: usuarioDB
            })
        })
    }

    login(req, res) {
        let body = req.body;

        administrador.findOne({email: body.email} , (erro, usuarioDB) =>{
            if (erro){
                return res.status(500).json({
                    ok : false,
                    err: erro,
                })
            }
            if (!usuarioDB){
                return res.status(400).son({
                    ok:false,
                    err:{
                        message : "Usuario o contraseña incorrecta"
                    },
                });
            }

            if (!bcrypt.compareSync(body.contrasena, usuarioDB.contrasena)){
                return res.status(400).son({
                    ok:false,
                    err:{
                        message : "Usuario o contraseña incorrecta"
                    },
                });
            }
        }
    
    )}

}



module.exports = AdministradorController;