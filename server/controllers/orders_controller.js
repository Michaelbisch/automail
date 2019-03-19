module.exports = {
    //admin 
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
    }
    //admin
    
}