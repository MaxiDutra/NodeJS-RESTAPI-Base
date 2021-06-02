const {Router} = require('express');


const { GetUsuarios } = require('../Controllers/UserController');
const router = Router();

 
router.get('/', GetUsuarios) 


module.exports = router;