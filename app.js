const express = require('express');
const { sequelize } = require('./models');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express()
//CORS
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/users', require('./routers/userRouter'));

app.use('/api/despachos', require('./routers/despachoRouter'));


app.listen(process.env.PORT, async () => {
    console.log(`Server up on http://localhost:${process.env.PORT}`)
    await sequelize.authenticate()
    console.log('Base de datos sincronizada!')
});


