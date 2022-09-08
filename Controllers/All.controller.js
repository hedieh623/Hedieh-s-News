const all = (req, res)=> {
  res.status(404).send({ message: "Route not found" });
}
//app.all handles anything that doesnt match the correct path.





module.exports = { all };
