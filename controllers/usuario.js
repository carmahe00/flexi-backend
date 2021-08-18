const { request, response } = require('express');
const { Soul_usuarios } = require('../models');
const bcryptjs = require('bcryptjs');

const { generarJWT } = require('../helpers/jwt');
const sendEmail = require('../utils/sendEmail');


const loginUser = async (req = request, res = response) => {

    try {

        const { email } = req.body
        const soul_usuario = await Soul_usuarios.findOne({
            where: { correo: email }
        })
        const token = await generarJWT(soul_usuario.uuid, soul_usuario.username)
        return res.json({
            soul_usuario,
            token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Algo salió mal'
        })
    }
}

const registerUser = async (req = request, res = response) => {
    const { username, email, role } = req.body
    let password = bcryptjs.hashSync(req.body.password, 10)
    try {
        const soul_usuario = await Soul_usuarios.create({ login: username, correo: email, password })

        const token = await generarJWT(soul_usuario.uuid, soul_usuario.username)
        return res.json({
            soul_usuario,
            token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

const getUser = async (req, res = response) => {
    try {
        const users = await Soul_usuarios.findAll()
        return res.json(users)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

const getById = async (req, res) => {
    const uuid = req.uuid
    try {
        const soul_usuario = await Soul_usuarios.findOne({
            where: { uuid }
        })
        
        return res.json(soul_usuario)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

const passwordReset = async (req = request, res = response) => {

    const { email } = req.body
    try {
        const token = await generarJWT(req.uuid, req.login)

        const link = `${req.headers.origin}/password-reset/${req.uuid}/${token}`
        await sendEmail(email, "Cambio de contraseña", link)

        return res.json({
            msg: "Solicitud enviada a su correo"
        })
    } catch (error) {

        return res.status(500).json({
            msg: 'Algo salió mal'
        })
    }
}

const changePassword = async (req = request, res = response) => {
    const { userId } = req.params

    try {
        const user = await Soul_usuarios.findOne({ where: { uuid: userId } })
        if (!user) {
            return res.status(400).json({
                msg: "Correo no encontrado"
            })
        }

        let password = bcryptjs.hashSync(req.body.password, 10)

        user.password = password;
        await user.save()

        return res.json({
            msg: "Usuario Actualizado"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Algo salió mal'
        })
    }
}

const signIn = async (req = request, res = response) => {

}

const deleteUser = async (req, res) => {
    const uuid = req.uuid
    try {
        const soul_usuario = await Soul_usuarios.findOne({ where: { uuid } })
        await soul_usuario.destroy()

        return res.json({ message: 'Usuario Eliminado!' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

const updateUser = async (req, res) => {
    const uuid = req.uuid
    const { username, email, role } = req.body
    try {
        const soul_usuario = await Soul_usuarios.findOne({ where: { uuid } })
        soul_usuario.username = username
        soul_usuario.email = email
        soul_usuario.role = role

        await soul_usuario.save()

        return res.json(soul_usuario)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

const renewToken = async (req = request, res = response) => {
    const { uuid } = req;
    console.log('acá')
    
    const soul_usuario = await Soul_usuarios.findOne({
        where: { uuid: uuid }
    })
    const token = await generarJWT(uuid, soul_usuario.username);
    res.json({
        token,
        soul_usuario
    })
}

module.exports = {
    registerUser,
    getUser,
    getById,
    deleteUser,
    updateUser,
    signIn,
    loginUser,
    passwordReset,
    changePassword,
    renewToken
}