var fs = require("fs");
var https = require("https");
var img =
  "https://images.piclumen.com/normal/20250711/06/9d517cd3321d44859b1ff77f1e218077.webp";

fs.writeFile(
  __dirname + "/index.html",
  "<h1>Platinium Travel</h1>",
  function (error) {
    if (error) {
      return console.error;
    } else {
      return console.log("File written successfully");
    }
  }
);

https.get(img, function (response) {
  response.pipe(fs.createWriteStream(__dirname + "/lynx.jpg"));
});
