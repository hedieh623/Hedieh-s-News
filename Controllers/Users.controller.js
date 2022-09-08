const selectUsers = require("../Models/Users.model.js");

const getUsers = (req, res,next) => {
  selectUsers()
  .then((users) => {
    res.status(200).send({users: users});
  })
   .catch((error)=>{
    next(error)
  })
};

module.exports = { getUsers };
