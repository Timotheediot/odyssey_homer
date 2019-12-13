const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.send('je suis sur la route /auth').status(200)});

router.get('/signup', (req, res) => {
    res.send('je suis sur la route /signup').status(200)
})

router.post('/signup', function(req, res, next) {
    res.send('I am in POST signup')});


//post one user
router.post("/auth/signup", (req, res) => {

  console.log(req)
  const User = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    lastname : req.body.lastname
  }

    connection.query("INSERT INTO users (email, password, name, lastname) SET ?", User, (err, res) => {
      if (err) {
        res
          .status(500).json({ flash:  err.message })
          .send(`Erreur lors de la récupération de la liste des users !!`)
      } else {
        res.status(200).json({ flash:  "User has been signed up !" })
      }
    })
  })

module.exports = router;