const invaliRequest = (req, res) => {
  res.status(404);
  res.header("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "Route not found" }));
};





module.exports = { invaliRequest };
