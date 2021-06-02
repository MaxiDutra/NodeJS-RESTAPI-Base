const { request , response } = require('express');

 

const GetUsuarios = (req = request, res = response) =>{
    res.json({
        msg :"GetUsuariosController - works!"
    });
}


    







module.exports = {
    GetUsuarios
} 