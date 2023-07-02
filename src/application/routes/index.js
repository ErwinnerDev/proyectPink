const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const controller = require('../controller/wellcomer')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/',controller.getWelcome)

module.exports = router;
