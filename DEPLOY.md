# Steps to deploy

*Reference : https://docusaurus.io/docs/en/publishing*

## 1. Update siteConfig.js

Update ``url`` and ``baseURL``. Usually:
- ``url``: https://phongnhat19.github.io
- ``baseURL``: /kintone-ui-component/

## 2. Create new version

```javascript
cd website
npm run version YOUR_NEW_VERSION
```

## 3. Push to git

## 4. Deploy to Github Pages

```bash
GIT_USER=<GIT_USER> \
  npm run publish-gh-pages
```

Github Pages will need a few minutes to clear cached for previouse deploy.