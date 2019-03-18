module.exports = {
    stripe: async () => {
        stripe.charges.create({
            amount: 400,
            currency: "usd",
            source: "tok_visa", // obtained with Stripe.js
            description: "Charge for jenny.rosen@example.com"
          }, function(err, charge) {
            console.log(err)
          });
    }
}