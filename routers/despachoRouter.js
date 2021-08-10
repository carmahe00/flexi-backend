const { Router } = require('express');
const {  Soul_usuarios, Despacho } = require('../models');
const router = Router();

router.post('/', async (req, res) => {
    const { userUuid, fechaDespacho } = req.body
    try {
        const user = await Soul_usuarios.findOne({ where: { uuid: userUuid } })
        const despachos = await Despacho.create({ fechaDespacho, usuarioId: user.id })

        return res.json(despachos)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const despachos = await Despacho.findAll({ include: ['soul_usuario'] })
        return res.json(despachos)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
});

module.exports = router