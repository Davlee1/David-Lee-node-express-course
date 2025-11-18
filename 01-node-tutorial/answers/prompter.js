const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let item = "Add to your Bucket list!";
let input = "";
let title = "";
let note = "";

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <h1>${item}</h1>
  <p>${note}</p>
  <form method="POST">
  <input name="item"></input>
  <button type="submit">Submit</button>
  </form>
  <h1>${title}</h1>
  <ul>${input}</ul>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      if (body["item"]) {
        item = "Add to your Bucket list!";
        title = "Bucket List";
        input += "<li>" + body["item"] + "</li>";
        let rand = Math.round(Math.random() * 9 + 1);
        console.log(rand);
        switch (rand) {
          case 1:
            note = "Yolo";
            break;
          case 2:
            note = "Deciding nothing is a choice";
            break;
          case 3:
            note = "A year from now you may wish you had started today";
            break;
          case 4:
            note = "Adventure may hurt you, but monotony will kill you";
            break;
          case 5:
            note = "Courage is being scared to death, but saddling up anyway";
            break;
          case 6:
            note = "Goals that are not written down are just wishes";
            break;
          case 7:
            note = "I haven't been everywhere, but it's on my list";
            break;
          case 8:
            note = "In the end, it's not the years in your life that count. It's the life in your years";
            break;
          case 9:
            note = "Live as if you were to die tomorrow. Learn as if you were to live forever";
            break;
          case 10:
            note = "Never tell me the sky's the limit when there are footprints on the moon";
            break;
          default:
           note = "error :(";
        }
      } else {
        item = "Nothing was entered.";
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
