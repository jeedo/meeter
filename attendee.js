/*
 * attendee.js
 */


// Private
var people = {};
var socketChair;

// Public
var self = module.exports = {
  add: function add(id) {
    if(!people[id]){
        people[id] = id;
        console.log('Addeded: '+ id);
    }
  },

  remove: function remove(id) {
    if(people[id]){
        delete people[id];
        console.log('Deleted: '+ id);
    }
  },

  getAttendeeList: function getAttendeeList() {
    return people;
  },

  getCount: function getCount() {
    return Object.keys(people).length;
  },

  setChair: function setChair(socket) {
    socketChair = socket;
  },

  getChair: function getChair() {
    return socketChair;
  }
};