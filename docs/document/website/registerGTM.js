const fs = require("fs");
const path = require("path");

const directoryPath = "build";
async function updateFolder(folderPath) {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const fullFilePath = folderPath + "/" + file;
    if (fs.lstatSync(fullFilePath).isDirectory()) {
      await updateFolder(fullFilePath);
    } else if (path.extname(file) === ".html") await registerGTM(fullFilePath);
  }
}

function registerGTM(filePath) {
  let fileContent = fs.readFileSync(filePath, "utf8");
  fileContent = fileContent.replace(
    "<body>",
    `
  <body>
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5N49D3"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  `
  );
  fs.writeFileSync(filePath, fileContent);
}

updateFolder(directoryPath);
