const { Router } = require('express');
const { getPedidos, getPedido } = require('../controllers/pedidosP');
const { validarJWT } = require('../middleware/validar-jwt');
const { validarCampos } = require('../middleware/validar-campos');

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
] ,getPedidos)

router.get('/:date/:idDespacho',[
    validarJWT,
    validarCampos
] ,getPedido)

module.exports = router