const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express.createServer();

express()
  .use(express.static(path.join(__dirname, 'public')))
  //.use(require('express-naked-redirect')())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
app.all(/.*/, function(req, res, next) {
  var host = req.header("host");
  if (host.match(/^www\..*/i)) {
    next();
  } else {
    res.redirect(301, "http://www." + host);
  }
})

  .get('/.well-known/acme-challenge/:content', function(req, res) {
        var x = '9nbyuDS_ewIn_-5sTfBqFDuWxKIEf6hjzVIaG8HaS2o';
        var y = 'F5Pl8rUw-xaXI5pkBadQGnX7SWZXvG9uBNY9tIu46B4';
        if (y === req.params.content) {
            res.send('F5Pl8rUw-xaXI5pkBadQGnX7SWZXvG9uBNY9tIu46B4.LB98ZAzz2-Ox5nBvnsCR2HpW5Pdp13hdgDU4LK1dTxw');
        } else if (x === req.params.content) {
            res.send('9nbyuDS_ewIn_-5sTfBqFDuWxKIEf6hjzVIaG8HaS2o.LB98ZAzz2-Ox5nBvnsCR2HpW5Pdp13hdgDU4LK1dTxw');
        }
    })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
