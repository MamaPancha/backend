const producto = require('../models/producto');

class ProductoController {

    registrar(req, res) {
        producto.create(req.body, (error, data)=> {
            if(error) {
                res.status(400).json({error})
            } else {
                res.status(201).json(data);
            }
        });
    }

    obtenerProductos(req, res) {
        producto.find((error, data)=> {
            if(error) {
                res.status(500).json({message: "error"});
            } else {
                res.status(200).json(data);
            }
        });
    }

    actualizarProducto(req, res) {
        let{id, nombre, precio, descripcion} = req.body;
        let obj = {
            nombre, precio, descripcion
        }

        producto.findByIdAndUpdate(id, {
            $set: obj
        }, (error, data)=> {
            if(error) {
                res.status(500).json({error});
            } else {
                res.status(200).json(data);
            }
        });
    }

    eliminarProducto(req, res) {
        let{id} = req.body;

        producto.findByIdAndRemove(id, (error, data)=> {
            if(error) {
                res.status(500).json({error});
            } else {
                res.status(200).json(data);
            }
        });
    }
}

module.exports = ProductoController;