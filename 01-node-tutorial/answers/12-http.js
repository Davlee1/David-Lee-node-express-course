console.log("-----------------------------------");
console.log("Question 8");
console.log("-----------------------------------");
console.log("");

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<h1>Welcome to our home page</h1>
      <a href="/greeting">Hi :)</a>`);
  } else if (req.url === "/greeting") {
    res.end(`<h1>Hallo! how are you?</h1>
      <a href="/ThatsGreat">Good</a>
      <br>
      <a href="/Uff">Bad</a>
      `);
  } else if (req.url === "/ThatsGreat") {
    res.end(`<h1>That's great!</h1>
      <a href="/">back home</a>
      `);
    } else if (req.url === "/Uff") {
    res.end(`<h1>That's rough buddy :(</h1>
      <a href="/">back home</a>
      `);
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
  }
});
server.listen(3000);
