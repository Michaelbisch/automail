const stripe = require('stripe')(process.env.STRIPE_SECRET)

module.exports = {
    //Admin 
    getAllOrders: (req, res) => {
        const db = req.app.get('db');  
        db.get_all_admin_orders()
          .then(orders => {
            res.status(200).send(orders);
          })
          .catch(err => {
            res.status(500).send(err);
          });
    },
    getAllRatings: ( req, res ) => {
        const db = req.app.get('db');
        db.get_all_admin_ratings()
        .then(ratings => {
            res.status(200).send(ratings);
        })
        .catch(err => {
            res.status(500).send(err)
        })
    },
    updateFulfilled: (req, res) => {
        const db = req.app.get('db');
        let { id: order_id } = req.params
        order_id = +order_id
    
        db.update_fullfilled({order_id: order_id}).then(list => {
            
            res.status(200).send(list)
        }).catch(err => {
            res.status(500).send(err)
        })
    },
    //Admin
    //Stripe
    handlePayment: (req, res) => {
        const { amount, token:{id}} = req.body
        stripe.charges.create(
            {
                amount: amount,
                currency: "usd",
                source: id,
                description: "Test charge from Michael"
            },
            (err, charge) => {
                if(err) {
                    console.log(err)
                    return res.status(500).send(err)
                } else {
                    console.log(charge)
                    return res.status(200).send(charge)
                }
            }
        )
    },
    addOrder: ( req, res ) => {
        const db = req.app.get('db');
        const isreviewed = false
        const isfulfilled = false
        const {
            rtopinput: topinput,
            rbottominput: bottominput,
            rplatecolor: platecolor,
            rtextcolor: textcolor,
            shipping,
            user_id
            } = req.body
            db.create_order({
                topinput,
                bottominput,
                platecolor,
                textcolor,
                isreviewed,
                shipping,
                isfulfilled,
                user_id
            }).then(order => {
                console.log(333333,order)
                res.status(200).send(order)
            }).catch(err => {
                res.status(500).send(err)
            })
    }
    
}