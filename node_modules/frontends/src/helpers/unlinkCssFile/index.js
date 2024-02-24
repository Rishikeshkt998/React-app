const fs = require("fs-extra");
const path = require("path");

const unlinkCssFile = (dir) =>
  fs.readdirSync(dir).forEach((file) => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      unlinkCssFile(fullPath);
    } else {
      if (fullPath.includes(".css")) {
        fs.unlink(fullPath);
      }
    }
  });
module.exports = unlinkCssFile;
