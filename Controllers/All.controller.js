const all = (req, res)=> {
  res.status(404);
  res.header("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "Route not found" }));
}
//app.all handles anything that doesnt match the correct path.





module.exports = { all };
