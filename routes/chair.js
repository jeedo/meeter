var express = require('express');
var router = express.Router();
var attendee = require('../attendee');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chair', { title: 'Chair', attendees: attendee.getAttendeeList() });
});

module.exports = router;
