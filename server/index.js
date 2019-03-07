require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session')

const pg = require('pg')
const pgSession = require('connect-pg-simple')(session)

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const ctrlUser = require('./controllers/user_controller')
const ctrlPosts = require('./controllers/posts_controller')
const ctrlOrders = require('./controllers/orders_controller')

const app = express();

const pgPool = new pg.Pool({
    connectionString: CONNECTION_STRING
})

app.use(bodyParser.json())
app.use(session({
    store: new pgSession({
        pool: pgPool,
        pruneSessionInterval: 60 * 60 * 24
    }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database connected')
})

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))

app.post('/auth/register', ctrlUser.register);
app.post('/auth/login',ctrlUser.login);