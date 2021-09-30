const express = require('express');
const AdministradorController = require('../controllers/administradorController');

class AdministradorRouter {
    constructor() {
        this.router = express.Router();
        this.config();
    } 

    config() {
        const administradorController = new AdministradorController();
        this.router.post('/administrador', administradorController.registrar);
        this.router.get('/administrador', administradorController.obtenerAdministradores);
        this.router.put('/administrador', administradorController.actualizarAdministrador);
        this.router.delete('/administrador', administradorController.eliminarAdministrador);
    }
}

module.exports = AdministradorRouter;