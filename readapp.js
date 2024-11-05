const fs = require("fs");
const data = fs.readFileSync("file/app-contacts.json", "utf-8");
fs.readFile("file/app-contacts.json", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
