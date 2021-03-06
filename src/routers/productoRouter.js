const express = require('express');
const upload = require('../libs/storage');
const ProductoController = require('../controllers/productoController');

class ProductoRouter {
    constructor() {
        this.router = express.Router();
        this.config();
    } 

    config() {
        const productoController = new ProductoController();
        this.router.post('/producto', upload.single('imagen'), productoController.registrar);
        this.router.get('/producto', productoController.obtenerProductos);
        this.router.put('/producto', productoController.actualizarProducto);
        this.router.delete('/producto', productoController.eliminarProducto);

    }
}

module.exports = ProductoRouter;