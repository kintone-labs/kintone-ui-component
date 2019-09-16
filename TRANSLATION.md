# Translation with Crowdin

## Step to translate a string 

### 1. Add translate tag 

Example:
```html
<translate>Hello</translate>
```

## 2. Write translation to `en.json` file

Run command:
```
npm run write-translations
```

## 3. Sync with Crowdin

```
CROWDIN_PROJECT_ID=kintone-ui-component-document CROWDIN_API_KEY=f6c3a322233a9a2cd93b351d35eb6da9 npm run crowdin-upload

CROWDIN_PROJECT_ID=kintone-ui-component-document CROWDIN_API_KEY=f6c3a322233a9a2cd93b351d35eb6da9 npm run crowdin-download
```