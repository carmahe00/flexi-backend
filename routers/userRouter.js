const { Router } = require('express');
const { check, body, param } = require('express-validator');

const { registerUser, getUser, getById, deleteUser, updateUser, loginUser, passwordReset, changePassword, renewToken } = require('../controllers/usuario');
const { validarCampos } = require('../middleware/validar-campos');
const { Soul_usuarios } = require('../models');
const { validarJWT, validarADMIN_ROLE } = require('../middleware/validar-jwt');

const router = Router();

router.post('/', [
    validarJWT,
    validarADMIN_ROLE,
    check('email', 'El nombre es obligatorio').isEmail().notEmpty(),
    check('password', 'El password es obligatorio').notEmpty(),
    body('email').custom(async (value) => {
        const usuario = await Soul_usuarios.findOne({
            where: { email: value }
        })
        if (usuario)
            return Promise.reject('E-mail ya existe')
    }),
    validarCampos
], registerUser);

router.get('/', getUser);

router.post("/reset-password", [
    check('email', 'El nombre es obligatorio').isEmail().notEmpty(),
    body('email').custom(async (value, { req }) => {
        const user = await Soul_usuarios.findOne({
            where: { correo: value }
        })
        
        if (!user)
            return Promise.reject('Este usuario no se ha encontrado')
        
        req.uuid = user.uuid
        req.login = user.login
    }),
    validarCampos
], passwordReset)

router.post('/login', [
    check('email', 'El nombre es obligatorio').isEmail().notEmpty(),
    check('password', 'El password es obligatorio').notEmpty(),
    body('email').custom(async (value) => {
        
        const email = await Soul_usuarios.findOne({
            where: { correo: value }
        })
        if (!email)
            return Promise.reject('Usuario o contraseña incorrecta')
    }),
    validarCampos
], loginUser)

router.post("/:userId", [
    param('userId').custom(async (value) => {
        const email = await Soul_usuarios.findOne({
            where: { uuid: value }
        })
        if (!email)
            return Promise.reject('Usuario o contraseña incorrecta')
    }),
    check('password', 'El password es obligatorio').notEmpty(),
    validarJWT,
    validarCampos
], changePassword)

router.get('/renew',[validarJWT, validarCampos], renewToken)

router.get('/find/:uuid', [validarJWT, validarCampos], getById);

router.delete('/:uuid', deleteUser);

router.put('/:uuid', updateUser);



module.exports = router