var express = require('express'),
    homeController = require('./controllers/home'),
    meetupController = require('./controllers/meetup'),
    app = express();

// ### app configuration
app.configure(function() {

  // configure middleware
  app.use(express.logger());

  //  app settings :: exposed key-value pairs set via app.set() or app.enable()
  app.set('port', 3000);
  app.set("views", __dirname + "/views");  // Set the view directory to /views
  app.set('view engine', 'jade');

  // ### register and set up another view engine (jade is default)
  // app.engine('html', require('lodashinexpress').__express);
  // app.set("views", __dirname + "/views");  // Set the view directory to /views
  // app.set('view engine', 'html');
});


// ### routes definition

app.get('/', homeController.home);
app.get('/hello', homeController.hello);

// --- REST API
app.get('/meetups', meetupController.index);
app.post('/meetups', meetupController.create);
app.get('/meetups/:id', meetupController.show);
app.put('/meetups/:id', meetupController.update);
app.delete('/meetups/:id', meetupController.destroy);


// ### Start Express app server
app.listen(app.get('port'));
console.log('Express server started on port %s', app.get('port'));
