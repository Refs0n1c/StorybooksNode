const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan');
const exphbs = require('express-handlebars')
const connectDb = require('./config/db')


//load config

dotenv.config({path: './config/config.env'})


//db
connectDb()
const app = express();

//handlerbars
app.engine('.hbs',exphbs.engine({extname: '.hbs', defaultLayout:'main'}));
app.set('view engine','.hbs');

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`)
    )