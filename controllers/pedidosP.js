const { request, response } = require("express")
const { Soul_v_pedidos_p, Sequelize, Despacho, Soul_v_pedido_pd, Soul_pedidosdetalle } = require('../models');

const { getPagination, getPagingData } = require("../helpers/pagination");

/**
 * @desc Devuelve todos los pedidos
 */
const getPedidos = async (req = request, res = response) => {
    const { page, size, puesto } = req.query

    let condition = puesto ? { puesto: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('puesto')), 'LIKE', `%${puesto}%`) } : null
    const { limit, offset } = getPagination(page, size)

    try {
        const soul_v_pedidos_p = await Soul_v_pedido_pd.findAndCountAll({
            limit,
            offset,
            col: ['id_pedido'],
            where: condition,
            distinct: true,

            include: { model: Despacho, as: 'depacho' }
        })

        const pedidos = getPagingData(soul_v_pedidos_p, page, limit)

        return res.send(pedidos);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Algo salió mal'
        })
    }
}

const getAllDetailPedido = async (req = request, res = response) => {
    try {
        const soul_v_pedidos_p = await Soul_v_pedidos_p.findAll()

        return res.json({
            pedidoP: soul_v_pedidos_p
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Algo salió mal'
        })
    }
}


const getDetalleDespachoPedido = async (req = request, res = response) => {
    const { idPedido, idDespacho } = req.params
    try {
        const soul_v_pedido_pd = await Soul_v_pedidos_p.findOne({
            where: {
                id_despacho: idDespacho,
                id_pedido: idPedido
            }
        })

        return res.send(soul_v_pedido_pd)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Algo salió mal'
        })
    }
}

const changeState = async (req = request, res = response) => {
    const { idPedido, idDespacho } = req.params
    try {
        const pedidoDetalle = await Soul_pedidosdetalle.update({ estado: 1 }, {
            where: {
                id_pedido: idPedido,
                id_despacho: idDespacho
            }
        })

        if (pedidoDetalle)
            return res.send('pedido actualizado')
        return res.json('pedido no encontrado').status(404)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Algo salió mal'
        })
    }
}

module.exports = {
    getPedidos,
    getAllDetailPedido,
    changeState,
    getDetalleDespachoPedido
}