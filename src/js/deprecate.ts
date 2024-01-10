let isShownDeprecationWarning = false;
if (!isShownDeprecationWarning) {
  isShownDeprecationWarning = true;
  console.error(
    'The maintenance of kintone UI Component v0 ended on 31 December 2023.\n' +
    'We recommend migrating to kintone UI Component v1: https://github.com/kintone-labs/kintone-ui-component'
  );
}
