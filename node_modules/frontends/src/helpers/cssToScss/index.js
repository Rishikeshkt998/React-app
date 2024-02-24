const fs = require("fs-extra");

module.exports = (paths) =>
  new Promise((resolve, reject) => {
    paths.forEach(async (path) => {
      try {
        if (fs.existsSync(path)) {
          const data = await fs.readFile(path, "utf8");
          var result = data.replace(/.css/g, ".scss");
          await fs.writeFile(path, result, "utf8");
          resolve("ok");
        }
      } catch (error) {
        reject(error);
      }
    });
  });
