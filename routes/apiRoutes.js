// ===============================================================================
// LOAD DATA
// Friends Array with friend objects
// ===============================================================================

const friendsArray = require('../data/friends.js')
var path = require('path')

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  app.get('/friendsAPI', function (req, res) {
    res.json(friendsArray)
  })

  //Route for POSTing profile
  app.post('/profile', function (req, res) {
    
    //friendsArray.push(req.body)
    //console.log(friendsArray)
    res.json(true)
  })


  
}
  