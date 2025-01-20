// server.js (backend)
const express = require("express");
const path = require("path")
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.json());

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get('/home', (req, res) => {
  res.render('home.ejs')
})
// Route to handle image generation
app.post("/name", async (req, res) => {

res.end(h1);

})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
