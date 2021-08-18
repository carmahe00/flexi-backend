const nodemailer = require('nodemailer');


const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "mail.flexi.com.co",
            port: 26,
            secure: false,
            auth: {
                user: "flexiusuarios@flexi.com.co",
                pass: "flexiusuarios"
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        const template = `
        <h1>Cambio de la contraseña</h1>
        <ul>
            <li>Ingrese al siguiente enlace: <a href="${text}" >link</a></li>
        </ul>
        `

        const info = await transporter.sendMail({
            from: ` FlexiCom <flexiusuarios@flexi.com.co> `,
            to: email,
            subject: subject,
            html: template
        })
        console.log("email sent sucessfully", info.messageId);
    } catch (error) {
        console.log(error)
    }
}


module.exports = sendEmail