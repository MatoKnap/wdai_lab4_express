var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/:value', (req, res, next) => {
//   const value = req.params.value;
//   res.status(200).json({ value });
// });

router.post('/', (req, res, next) => {
  res.status(201).json({ message: 'POST request received' });
});

module.exports = router;
