const fs = require('fs');
const path = require('path');

const entry = "./src";

function flatten(lists) {
  return lists.reduce((a, b) => a.concat(b), []);
}

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath)
    .map(file => path.join(srcpath, file))
    .filter(path => fs.statSync(path).isDirectory());
}

function getDirectoriesRecursive(srcpath) {
  return [srcpath,...flatten(getDirectories(srcpath).map(getDirectoriesRecursive))];
}

function getList(entry) {
  const rawList = getDirectoriesRecursive(entry);
  rawList.shift();
  let list = removeTestDirectories(rawList);
  let goodList = [];
  console.log("RAW LIST");
  console.log(list);
  for(let i = 0; i < list.length - 1; i ++) {
    if(hasIndexTs(list[i])){
      goodList.push(list[i]);
    }
  }
  goodList = removeSrcSubString(goodList);
  return goodList;
}

function removeTestDirectories(list) {
  const returnedList = [];
  list.map(el => {
    if(!el.includes("test")) {
      returnedList.push(el);
    }
  })
  return returnedList;
}

function removeSrcSubString(list) {
  const returnedList = [];
  list.map(el => {
    returnedList.push(el.replace("src\\", ""));
  })
  return returnedList;
}

function hasIndexTs(path) {
  const listOfFiles = fs.readdirSync(path);
  if(Object.values(listOfFiles).includes("index.ts") && Object.values(listOfFiles).includes("style.ts")) {
    return true;
  } else {
    return false;
  }
}

console.log(getList(entry));  