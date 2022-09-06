const selectUsers = require("../Models/Users.model.js");

const getUsers = (req, res) => {
  selectUsers().then((users) => {
        res.status(200).send(users);

  });
};

module.exports = { getUsers };
