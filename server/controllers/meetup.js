var _ = require('lodash')
  , meetups;

meetups = [
    { id: 1, label: 'JsZgb Meetup #1', date: '2013-11-06' }
  , { id: 2, label: 'JsZgb Meetup #2', date: '2013-12-04' }
  , { id: 3, label: 'JsZgb Meetup #3', date: 'TBA' }
];


function index(req, res) {
  res.send(meetups);
}


function create(req, res) {
  var data = req.body;
  meetups.push(data); // IRL: add to DB, here just add to array
  res.send(204);      // confirm action by sending 204
}


function show(req, res) {
  var id = parseInt(req.params.id, 10)
    , meetup = _.find(meetups, { id: id });
  res.send(meetup);
}


function update(req, res) {
  var id = parseInt(req.params.id, 10)
    , data = req.body
    , meetup = _.find(meetups, { id: id });
  meetup = _.extend(meetup, data);
  res.send(204);
}


function destroy(req, res) {
  var id = parseInt(req.params.id, 10);
  meetups = _.reject(meetups, { id: id });  // IRL: would remove it from the DB
  res.send(204);
}


// ### Expose from the module
module.exports = {
    index: index
  , create: create
  , show: show
  , update: update
  , destroy: destroy
};
