const webpack = require("webpack");
const configuration = require("../webpack.esm.config.js");
const path = require("path");
const packageJSON = require("../package.json");

const fs = require("fs");
const componentDirectories = ["button", "textarea"];

const classNamePattern = /(kuc(-[a-z]+)+)__|(kuc(-[a-z]+)+)\>|(kuc(-[a-z]+)+)\s|(kuc(-[a-z]+)+)\n|(kuc(-[a-z]+)+)\"/g;
const suffixs = ["\\", ">", "__", '"', "=", ",", ";", " ", "\n"];
const classNameVersion = `-${packageJSON.version.replace(/\./g, "-")}`;

const getChangedValue = (str, version) => {
  let changedValue = str;
  suffixs.forEach(suffix => {
    if (changedValue.indexOf(suffix) !== -1) {
      changedValue = changedValue.replace(suffix, version + suffix);
      return true;
    }
  });
  return changedValue;
};

const replaceAllByPattern = (data, pattern, version) => {
  let tempData = data;
  const matchedValues = Array.from(new Set(data.match(pattern)));
  matchedValues.forEach(matchedValue => {
    // ignore the base file "base/kuc-base"
    const tempChangedValue =
      matchedValue === 'kuc-base"'
        ? matchedValue
        : getChangedValue(matchedValue, version);
    tempData = tempData.replace(
      new RegExp(matchedValue, "g"),
      tempChangedValue
    );
  });
  return tempData;
};

const renameTypeFile = (oldFile, newFile) => {
  if (fs.existsSync(oldFile)) {
    fs.renameSync(oldFile, newFile);
  }
};

const deleteFile = file => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
  }
};

const addTypeFiles = sourcePaths => {
  try {
    sourcePaths.forEach(sourcePath => {
      renameTypeFile(
        path.resolve(__dirname, `../lib/${sourcePath}/type.d.ts`),
        path.resolve(__dirname, `../lib/${sourcePath}/index.d.ts`)
      );
      deleteFile(path.resolve(__dirname, `../lib/${sourcePath}/type.js`));
      deleteFile(path.resolve(__dirname, `../lib/${sourcePath}/style.d.ts`));
    });
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  webpack(configuration, async (error, stats) => {
    if (error || stats.hasErrors()) {
      console.error(error || stats.toString({ colors: true }));
    } else {
      console.log(stats.toString({ colors: true }));
      componentDirectories.forEach((item, index) => {
        let data = fs
          .readFileSync(path.resolve(__dirname, `../lib/${item}/index.js`))
          .toString();
        data = replaceAllByPattern(data, classNamePattern, classNameVersion);
        fs.writeFileSync(
          path.resolve(__dirname, `../lib/${item}/index.js`),
          data
        );

        const cssFilePath = path.resolve(__dirname, `../src/${item}/style.ts`);
        const isExist = fs.existsSync(cssFilePath);
        if (isExist) {
          let cssContent = fs.readFileSync(cssFilePath).toString();
          cssContent = replaceAllByPattern(
            cssContent,
            classNamePattern,
            classNameVersion
          );
          fs.writeFileSync(
            path.resolve(__dirname, `../lib/${item}/style.js`),
            cssContent
          );
        }
      });
      addTypeFiles(componentDirectories);
    }
  });
};

main();
