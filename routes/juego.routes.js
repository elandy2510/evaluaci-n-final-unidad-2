const express = require('express');
const router = express.Router();
const controlador = require('../controllers/juego.controllers');

router.get('/', controlador.listar);
router.get('/:id', controlador.buscarId);
router.get('/', controlador.guardar);

module.exports = router;