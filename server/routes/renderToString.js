/**
 * This is used to render the React client
 */
 var express = require('express');
 var router = express.Router();
 var React = require('react');
 var ReactDOMServer = require('react-dom/server');
 import App from '../../client/components/app';
 
 router.get('/', function(req, res, next) {
     try {
         const appString = ReactDOMServer.renderToString(<App />);
         
         res.render('renderToString', { component: appString });
     } catch (err) {
         console.error(err);
     }
 });

 module.exports = router;
 