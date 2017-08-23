const express 		   = require('express');
const app 			     = express();
const router 		     = express.Router();
const mongoose 		   = require('mongoose');
const bodyParser 	   = require('body-parser');
const cookieParser   = require('cookie-parser');
const acceptLanguage = require('accept-language');

const routes = require('./routes'), { faqs, login, zips, mailer } = routes;
const dbUrl = "mongo db url goes here";


acceptLanguage.languages(['en-US', 'es-US', 'fr-CA']);

function detectLocale(req) {
  const cookieLocale = req.cookies.locale;
 // console.log("req headers: ", req.headers);
  return acceptLanguage.get(cookieLocale || req.headers['accept-language']) || 'en-US';
 
}


app.use(express.static('public'))

  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cookieParser())

  .get('/*', function (req, res) {
      const locale = detectLocale(req);
      console.log("locale: ", locale);
      res.cookie('locale', locale, { maxAge: (new Date() * 0.001) + (365 * 24 * 3600) });
      res.sendFile( __dirname + "/" + "index.html" );
  }
);

const server = app.listen(8085, function () {
  const host = server.address().address
  const port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});




//db config
// mongoose.connect('[conect url here]', (err) => { if (err) { throw err; } });
// var db = mongoose.connection;
// db.on('error', console.log.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log('DB is now connected! Test deploy from 2nd user');
// })




