const { Router } = require('express');
const { getPedidos, getAllDetailPedido, getDetalleDespachoPedido, changeState } = require('../controllers/pedidosP');
const { validarJWT } = require('../middleware/validar-jwt');
const { validarCampos } = require('../middleware/validar-campos');

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
] ,getPedidos)

router.get('/detalle',[
    validarJWT,
    validarCampos
] ,getAllDetailPedido)

router.get('/detalle/:idPedido/:idDespacho',[
    validarJWT,
    validarCampos
] ,getDetalleDespachoPedido)

router.put('/:idPedido/:idDespacho',[
    validarJWT,
    validarCampos
] ,changeState)

module.exports = router