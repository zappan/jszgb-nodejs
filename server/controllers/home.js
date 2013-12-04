
function helloPlainText(req, res) {
  res.send('Hello World');
};

function helloHtml(req, res) {
  var now = new Date().toISOString()
  res.render('hello', { serverTime: now });
};


// ### Publicly exposed from the module
module.exports = {
  home: helloPlainText,
  hello: helloHtml
};
