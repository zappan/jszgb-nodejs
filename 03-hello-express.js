var express = require('express'),
    app = express.createServer();

// app.use(express.logger());

app.get('/test', function(req, res){
    res.send('Hello World');
});

app.listen(3000);  // 3000
console.log('Express server started on port %s', 3000);
