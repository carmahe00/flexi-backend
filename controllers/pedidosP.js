const { request, response } = require("express")
const { Soul_v_pedidos_p, Sequelize } = require('../models');
const moment = require('moment');
const { Op } = require('sequelize');
const { getPagination, getPagingData } = require("../helpers/pagination");

/**
 * @desc Devuelve todos los pedidos
 */
const getPedidos = async (req = request, res = response) => {
    const { page, size, puesto } = req.query

    let condition = puesto ? { puesto: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('puesto')), 'LIKE', `%${puesto}%`) } : null
    const { limit, offset } = getPagination(page, size)

    try {
        const soul_v_pedidos_p = await Soul_v_pedidos_p.findAndCountAll({
            limit,
            offset,
            where: condition
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

const getPedido = async (req = request, res = response) => {
    const { date, idDespacho } = req.params
    
    try {
        const soul_v_pedidos_p = await Soul_v_pedidos_p.findOne({
            where: {
                fecha_inicio: {
                    [Sequelize.Op.eq]: date
                }, id_despacho: idDespacho
            },
            include: [{ all: true, nested: true }]
        })
        
        if (!soul_v_pedidos_p)
            return res.status(404).json({
                msg: "pedido no encontrado"
            })

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

module.exports = {
    getPedidos,
    getPedido
}