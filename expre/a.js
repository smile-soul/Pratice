var express = require('express');
var app = express()
var router = express.Router()

// predicate the router with a check and bail out when needed
router.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

router.get('/', function (req, res) {
  res.send('hello, user!')
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})