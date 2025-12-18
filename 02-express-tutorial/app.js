const express = require("express");
const path = require("path");
const { products, people } = require("./data");
const { router } = require("./routes/people.js");
const app = express();

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date();
  console.log(method, url, time);
  next();
};
//

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/people", router);
app.use(logger);

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});
app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

/*
app.get("/api/v1/people", (req, res) => {
  res.json(people);
});
*/

app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);
  if (!product) {
    return res.status(404).send("That product was not found.");
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
    sortedResults = sortedResults.slice(0, parseInt(limit));
  }

  if (maxcost) {
    sortedResults = sortedResults.filter((product) => {
      return product.price <= Number(maxcost);
    });
  }
  if (sortedResults.length < 1) {
    return res.status(200).send("no products matched your search");
  }
  res.status(200).json(sortedResults);
});

/*
app.post("/api/people", (req, res) => {
  if (!req.body) {
    res.status(400).json({ success: false, message: "Please provide a name" });
  } else {
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
  }
});
*/

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
