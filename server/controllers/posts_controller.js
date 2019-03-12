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
      const { user_id } = req.session.user;
      const { stars, post } = req.body;
  
      db.create_post({stars, post, user_id})
        .then(posts => {
          res.status(200).send(posts);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    },
    updatePost: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const { stars, post } = req.body;
        
        db.update_posts({id, stars, post})
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
      console.log(555555, req.params)
      console.log(222222, req.body)
      const { order_id } = req.body;
      const { id } = req.params;
      const db = req.app.get('db');

      let orders = await db.check_id({order_id})
      orders = orders[0]
      if(!id){
        console.log('no product id')
        return res.sendStatus(401)
      }
      console.log(11111111, orders.user_id)
      if(+id !== orders.user_id){
        console.log('id not =')
        return res.sendStatus(401)
      }
      
      res.status(200).send(orders)
    }
  };
  