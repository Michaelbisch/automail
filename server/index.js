require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session')

const pg = require('pg')
const pgSession = require('connect-pg-simple')(session)

const path = require('path'); 

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, STRIPE_SECRET } = process.env

const ctrlUser = require('./controllers/user_controller')
const ctrlPosts = require('./controllers/posts_controller')
const ctrlOrders = require('./controllers/orders_controller')

const app = express();

const pgPool = new pg.Pool({
    connectionString: CONNECTION_STRING
})

app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json())
app.use(session({
    store: new pgSession({
        pool: pgPool
    }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1800000
    }
}))


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database connected')
})

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))

//User endpoints
app.post('/auth/register', ctrlUser.register);
app.post('/auth/login', ctrlUser.login);
app.get('/auth/checkuser', ctrlUser.getUser);
app.post('/auth/logout', ctrlUser.Logout);

//Review endpoints
app.get('/api/reviews', ctrlPosts.getAll);
app.post('/api/review', ctrlPosts.addPost);
app.put('/api/review/:id', ctrlPosts.updatePost);
app.delete('/api/review/:id', ctrlPosts.deletePost);
app.post('/api/idcheck/:id', ctrlPosts.idCheck);

//Stripe endpoints
app.post('/api/payment', ctrlOrders.handlePayment)

//Order endpoints
app.get('/api/orders', ctrlOrders.getAllOrders)
app.get('/api/ratings', ctrlOrders.getAllRatings)
app.put('/api/isfulfilled/:id', ctrlOrders.updateFulfilled)

//Place an order endpoint
app.post('/api/placedorder', ctrlOrders.addOrder)



app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});