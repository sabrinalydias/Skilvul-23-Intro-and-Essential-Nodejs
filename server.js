const http = require("http"),
  url = require("url"),
  makeServer = function (req, res) {
    let path = url.parse(req.url).pathname;
    if (path === "/about") {
      res.write("Welcome to about us page");
    } else if (path === "/contact") {
      res.write("Welcome to contact us page");
    } else {
      res.write("Hello World!");
    }
    res.end();
  },
  server = http.createServer(makeServer);
server.listen(8000, () => {
  console.log("Node server listened at port 8000");
});
