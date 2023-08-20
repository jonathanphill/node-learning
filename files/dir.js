const fs = require("fs");

if (!fs.existsSync("./New")) {
  fs.mkdir("./New", (err) => {
    if (err) throw err;
    console.log("Directory Created");
  });
}

if (fs.existsSync("./New")) {
  fs.rmdir("./New", (err) => {
    if (err) throw err;
    console.log("Directory Removed");
  });
}


