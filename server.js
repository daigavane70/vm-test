const app = require("express")();

app.get("/", (req, res) => {res.send("This is a test application")})

app.listen(3000, () => {console.log("Server is up and running at port 3000")})