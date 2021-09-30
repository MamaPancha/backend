const express = require('express');
const DbConnection = require('./database/dbConnection');
const ProductoRouter = require('./routers/productoRouter');
const AdministradorRouter = require('./routers/administradorRouter');

class Server {
    constructor() {

        // Conectar a la base de datos
        const dbConnection = new DbConnection;

        this.app = express(); 
        this.config();
        
    }

    config() {
        // Indicar el puerto por el que se montará el servidor
        this.app.set('port', process.env.PORT || 3000);
        //Indicar que se manejarán solicitudes en formato Json
        this.app.use(express.json());
        // Ruta raíz
        const router = express.Router();
        router.get('/', (req, res)=> {
            res.status(200).send();
        });

        //-------------- Crear Rutas Diferentes a la Raíz -------------------------------->
        const productoRouter = new ProductoRouter();
        const administradorRouter = new AdministradorRouter();
        
        //-------------- Añadir Rutas -------------------------------->
        this.app.use(router);
        this.app.use(productoRouter.router);
        this.app.use(administradorRouter.router);

        //-------------- Levantar el Servidor ------------------------->
        this.app.listen( this.app.get('port'), ()=> {
            console.log("Corriendo sobre el puerto => ", this.app.get('port'));
        });
    }
}

new Server();
