const morgan = require('morgan');
const express = require('express');
const cors = require('cors');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/userController';
       
        //Middelwares
        this.middlewares();
        //routes
        this.routes();
        

    }

    routes(){
      this.app.use(this.userPath, require('./routes/userRoutes'));
    }
    
    start(){
        this.app.listen( this.port, () => {
            console.log('Server on port', this.port);
        });
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
    }



}

module.exports = Server;