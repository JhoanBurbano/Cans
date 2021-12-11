const { Router } = require('express');
const { getByRaza, getCans, postCan, getTemps, getDB } = require('./controllers/index');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs/:idRaza', getByRaza)
router.get('/dogs', getCans)
router.post('/dog', postCan)
router.get('/temperament', getTemps)
router.get('/', getDB)


module.exports = router;
