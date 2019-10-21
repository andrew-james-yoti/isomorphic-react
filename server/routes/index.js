import ReactDOMServer from 'react-dom/server';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // const html = ReactDOMServer.renderToString(<div>Hello World</div>);
  // res.send(html);
});

module.exports = router;
