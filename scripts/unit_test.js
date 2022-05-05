const path = require("path");
const fs = require("fs");

const componentDirectories = ["button"];

const main = async () => {
  componentDirectories.forEach((item, index) => {
    const cssFilePath = path.resolve(__dirname, `../src/${item}/index.css`)
    const isExist = fs.existsSync(cssFilePath);
    if(isExist) {
      const cssContent = fs.readFileSync(cssFilePath).toString();
      fs.writeFileSync(
        path.resolve(__dirname, `../unit_test/${item}/index.css`),
        cssContent
      );
    }
  });
};

main();
