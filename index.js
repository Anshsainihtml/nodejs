// server.js (backend)
const express = require("express");


const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/home", (req, res) => {
    res.render("index.ejs");
} )

// Route to handle image generation
app.post("/name", async (req, res) => {
 let a = 'h1'

  res.writeHead(200, {'content-type': 'text/html'})
  
  console.log(req.body)

  const { name } = req.body;
  console.log(name);
  const h1 = `<h1>hello  ${name}</h1>`
  res.end(h1);

})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
