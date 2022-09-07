const selectUsers = require("../Models/Users.model.js");

const getUsers = (req, res,next) => {
  selectUsers()
  .then((users) => {
    res.status(200).send(users);
  })
   .catch((error)=>{
    next(error)
  })
  //we use error handlers so that we show the user a helpful message about what went wrong and to stop the server from dying.
 // it works by saying let me select the users,if i fail ill let the next handle it
};

module.exports = { getUsers };
