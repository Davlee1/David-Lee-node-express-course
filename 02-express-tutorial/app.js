const express = require("express");
const path = require("path");
const { products } = require("./data");
const app = express();

app.use(express.static("./public"));

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});
app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);
  if (idToFind > 4 || idToFind <= 0) {
    res.json({ message: "That product was not found." });
  } else {
    res.json(product);
  }
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit, maxcost } = req.query;
  let sortedResults = [...products];

  if (search) {
    sortedResults = sortedResults.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedResults = sortedResults.Array.slice(0, limitToFind - 1);
  }

    if (maxcost) {
    sortedResults = sortedResults.filter((product) => {
      return product.price <= maxcost;
    });
  }
  if (sortedResults.length < 1) {
    res.status(200).send('no products matched your search');
  }
  res.status(200).json(sortedResults)
});



app.all("*", (req, res) => {
  res.status(404).send("404 page not found");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000...");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
