module.exports = {
    getAll: (req, res) => {
      const db = req.app.get('db');  
      db.get_all_posts()
        .then(posts => {
          res.status(200).send(posts);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    },
    addPost: (req, res) => {
      const db = req.app.get('db');
      const { rating, post, user_id } = req.body;
  
      db.create_post({rating, post, user_id}).then(posts => {
          db.review_status({user_id})
          res.status(200).send(posts);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    },
    updatePost: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const { rating, post } = req.body;
        
        db.update_posts({id, rating, post})
        .then(posts => {
            res.status(200).send(posts);
        })
        .catch(err => {
            res.status(500).send(err);
        });
    },
    deletePost: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
                                      
        db.delete_post({id})
        .then(posts => {
        res.status(200).send(posts);
        })
        .catch(err => {
        res.status(500).send(err);
        });
    },
    idCheck: async ( req, res ) => {
      const { order_id } = req.body;
      const { id } = req.params;
      const db = req.app.get('db');

      let orders = await db.check_id({order_id})
      orders = orders[0]
      if(!id){
        return res.sendStatus(401)
      }
      if(+id !== orders.user_id){
        return res.sendStatus(401)
      }
      console.log(orders)
      res.status(200).send(orders)
    }
  };
  