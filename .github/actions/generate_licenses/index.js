const core = require("@actions/core");
const fs = require("fs");
const path = require("path");
const { isMatchPackage } = require("@cybozu/license-manager");

const workingDirectory = path.resolve("./");
const productLicenseFile = path.resolve("./license-manager/product-license");

const licenseFile = `${workingDirectory}/LICENSE`;

const packagePath = `${workingDirectory}/package.json`;
const extractedProdLicenseFilePath = `${workingDirectory}/licenses-prod.json`;

const licenseManagerDevConfigPath = `${workingDirectory}/license-manager/license-manager-dev.config.js`;
const extractedDevLicenseFilePath = `${workingDirectory}/licenses-dev.json`;

const formatLicenseContent = (licenseInfo) => {
  let repository;
  if (Object.prototype.hasOwnProperty.call(licenseInfo, "repository")) {
    if (typeof licenseInfo.repository === "string") {
      repository = licenseInfo.repository;
    } else {
      repository = licenseInfo.repository?.url
        ? licenseInfo.repository.url
        : "";
    }
  }

  return `\n\n\n${licenseInfo.name}${repository ? `\nrepository: ${repository}` : ""}
version: ${licenseInfo.version}
license: ${licenseInfo.license}
${licenseInfo.licenseText}`;
};

const generateProdLicenseContent = (packagePath, extractedProdLicenseFilePath) => {
  let packageInfo = {};
  try {
    packageInfo = JSON.parse(fs.readFileSync(packagePath).toString());
  } catch (error) {
    core.setFailed(error.message);
  }

  let dependenciesList;
  try {
    dependenciesList = Object.keys(packageInfo.dependencies);
  } catch (_) {
    dependenciesList = [];
  }

  let prodLicensesInfo = [];
  try {
    prodLicensesInfo = JSON.parse(
      fs.readFileSync(extractedProdLicenseFilePath).toString(),
    );
  } catch (error) {
    core.setFailed(error.message);
  }

  let prodLicenseContent = "";
  dependenciesList.forEach((dependency) => {
    for (let i = 0; i < prodLicensesInfo.length; i++) {
      const licenseInfo = prodLicensesInfo[i];
      if (dependency === licenseInfo.name) {
        prodLicenseContent += formatLicenseContent(licenseInfo);
        break;
      }
    }
  });

  return prodLicenseContent;
};

const generateDevLicenseContent = (licenseManagerDevConfigPath, extractedDevLicenseFilePath) => {
  let devLicensesInfo = [];
  try {
    devLicensesInfo = JSON.parse(
      fs.readFileSync(extractedDevLicenseFilePath).toString(),
    );
  } catch (error) {
    core.setFailed(error.message);
  }

  let devLicenseContent = "";
  const devConfig = require(licenseManagerDevConfigPath);
  if (devConfig.analyze && devConfig.analyze.allowPackages) {
    const devAllowPackages = devConfig.analyze.allowPackages;
    devAllowPackages.forEach((devAllowPackage) => {
      for (let i = 0; i < devLicensesInfo.length; i++) {
        const licenseInfo = devLicensesInfo[i];
        if (isMatchPackage(licenseInfo, devAllowPackage)) {
          devLicenseContent += formatLicenseContent(licenseInfo);
        }
      }
    });
  }

  return devLicenseContent;
};

let licenseContent;

try {
  licenseContent = `${fs.readFileSync(productLicenseFile).toString()}`;
} catch (e) {
  licenseContent = "";
}

const prodLicenseContent = generateProdLicenseContent(packagePath, extractedProdLicenseFilePath);
const devLicenseContent = generateDevLicenseContent(licenseManagerDevConfigPath, extractedDevLicenseFilePath);

if (prodLicenseContent || devLicenseContent) {
  licenseContent += licenseContent ? "\n\n\n" : "";
  licenseContent += `Licenses for Third-Party Libraries

  The following sections contain licensing information for libraries that
  we have included with the kuc.min.js.`;

  licenseContent += prodLicenseContent ? prodLicenseContent : "";
  licenseContent += devLicenseContent ? devLicenseContent : "";
}

fs.writeFileSync(licenseFile, licenseContent);
core.setOutput("license_file_path", licenseFile);
