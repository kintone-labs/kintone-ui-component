const webpack = require("webpack");
const configuration = require("../webpack.config.js");
const path = require("path");
const packageJSON = require("../package.json");

const fs = require("fs");
configuration.mode = process.argv[2];
const classNamePattern = /(kuc(-[a-z]+)+__)|(kuc(-[a-z]+)+\\)|(kuc(-[a-z]+)+\>)|(kuc(-[a-z]+)+\")|(kuc(-[a-z]+)+\[)|(kuc(-[a-z]+)+\s)|(--)?(kuc(-[a-z]+)+,)|(kuc(-[a-z]+)+;)/g;
const suffixs = ["\\", ">", "__", '"', "=", ",", ";", " ", "["];
const classNameVersion = `-${packageJSON.version.replace(/\./g, "-")}`;

const getChangedValue = (str, version) => {
  let changedValue = str;
  suffixs.forEach((suffix) => {
    if (changedValue.indexOf(suffix) !== -1) {
      changedValue = changedValue.replace(suffix, version + suffix);
      return true;
    }
  });
  return changedValue;
};

const replaceAllByPattern = (data, pattern, version) => {
  let tempData = data;
  const matchedValues = Array.from(new Set(data.match(pattern))).filter(value => value[0] != "-");
  matchedValues.forEach((matchedValue) => {
    // ignore the base file "base/kuc-base"
    const tempChangedValue =
      matchedValue === "kuc-base "
        ? matchedValue
        : getChangedValue(matchedValue, version);
    tempData = tempData.replace(
      new RegExp(escapeRegExp(matchedValue), "g"),
      tempChangedValue
    );
  });
  return tempData;
};

const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

const main = async () => {
  webpack(configuration, async (error, stats) => {
    if (error || stats.hasErrors()) {
      console.error(error || stats.toString({ colors: true }));
    } else {
      console.log(stats.toString({ colors: true }));
      let data = fs
        .readFileSync(path.resolve(__dirname, "../umd/kuc.min.js"))
        .toString();
      data = replaceAllByPattern(data, classNamePattern, classNameVersion);
      data += `(_=>{window.Kuc=window.Kucs["${packageJSON.version}"];})();`;
      fs.writeFileSync(path.resolve(__dirname, "../umd/kuc.min.js"), data);
    }
  });
};

main();
