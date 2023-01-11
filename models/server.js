const express = require('express');
const cors = require('cors')


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '../api/usuarios'

        //Middelwears

        this.middlewears();

        this.routes();
    }


    middlewears() {

        //CORS
        this.app.use( cors() );

        //lectura y parseo

        this.app.use( express.json() );

        //directorio publico
        this.app.use( express.static('public') )

    }

    routes() {

        this.app.use( this.usersPath, require('../routes/usuarios'))
        
    };


    listen() {
        this.app.listen( process.env.PORT , () => {
            console.log('Servidor corriendo', this.port);
        })
    }

}


module.exports = Server