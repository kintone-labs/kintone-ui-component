let isShownDeprecationWarning = false;
if (!isShownDeprecationWarning) {
  isShownDeprecationWarning = true;
  console.error(
    'The maintenance of kintone UI Component v0 has ended.\n' +
    'Please migrate to kintone UI Component v1: https://github.com/kintone-labs/kintone-ui-component'
  );
}
