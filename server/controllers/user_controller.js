const bcrypt = require('bcryptjs') 

module.exports = {
    register: async (req, res) => {
        const { email, password } = req.body;
        const { session } = req;
        const db = req.app.get('db');
        let takenEmail = await db.check_email({email})
        

        takenEmail = takenEmail[0]

        if(takenEmail) {
            return res.sendStatus(409)
        }
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password ,salt);
        let user = await db.register({ email, password: hash})
        user = user[0]
        session.user = user
        res.status(200).send(session.user)
    },
    login: async ( req, res ) => {
        const { email, password } = req.body
        const { session } = req
        const db = req.app.get('db')
        
        let user = await db.login({email})

        user = user[0]
        
        if(!user) {
            res.sendStatus(404)
        }
        
        let authenticated = bcrypt.compareSync( password, user.password )
        if(authenticated){
            delete user.password
            session.user = user
            res.status(200).send(session.user)
        } else {
            res.sendStatus(401)
        }
    },
    getUser: async ( req, res ) => {
        const { user } = req.session
        if(user){
            res.status(200).send(user)
        } else {
            res.sendStatus(409)
        }
    },
    Logout: ( req, res ) => {
        req.session.destroy(function() {
            res.sendStatus(200)
        });
    }
}