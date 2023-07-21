let isShownDeprecationWarning = false;
if (!isShownDeprecationWarning) {
  isShownDeprecationWarning = true;
  console.warn(
    'The maintenance of kintone UI Component v0 will end on December 31, 2023, and we will recommend you migrate to v1.\n' +
    'For more details, please check here: https://github.com/kintone-labs/kintone-ui-component/discussions/1280'
  );
}
