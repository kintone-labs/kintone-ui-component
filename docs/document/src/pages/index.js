import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function getCurrentLanguage() {
  const {siteConfig} = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl;
  if(baseUrl.includes("/ja/")) return "ja";
  return "en";
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const currentLanguage = getCurrentLanguage();
  if(currentLanguage === "en") {
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Be a smart Kintone developer with <span className="title-text">Kintone UI Component</span>.</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--md button-top"
              to="/docs/getting-started/quick-start">
              Getting Started
            </Link>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Be a smart kintone developer with <span className="title-text">kintone UI Component</span>.</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--md button-top"
              to="/docs/getting-started/quick-start">
              Getting Started
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

function HomepagePolicy () {
  const currentLanguage = getCurrentLanguage();
  if(currentLanguage === "en") {
    return (
      <div className="support-policy">
        <div className="container">
          <div className="title">Support Policy</div>
          <div className="github-infomation">
            You can ask questions and/or submit requests on
            <a href="https://github.com/kintone-labs/kintone-ui-component/issues" target="_blank" rel="noreferrer"> GitHub Issue</a>.
          </div>
          <div className="more-infomation">
            You are allowed to change the source code, redistribute it, and use it in accordance with the license.<br/>
            For more details of the license type please refer to the GitHub repository.
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="support-policy">
        <div className="container">
          <div className="title">Support Policy</div>
          <div className="github-infomation">
            kintone UI Component の仕様については、テクニカルサポートへお問い合わせいただけます。<br/>
            <a href="https://faq.cybozu.info/alphascope/cybozu/web/kintone/Detail.aspx?id=1763" target="_blank" rel="noreferrer"> サポートへのお問い合わせ方法</a>
            をご確認の上、お問合せください。
          </div>
          <div className="github-infomation">
            その他 <a href="https://github.com/kintone-labs/kintone-ui-component/issues" target="_blank" rel="noreferrer"> GitHub Issue</a>.
            にてご質問や機能リクエストを受け付けております。
          </div>
          <div className="more-infomation">
            ソースコードの変更、再配布および商用利用等は、ライセンスに従ってご利用可能です。<br/>
            ライセンスの種別は GitHub のリポジトリでご確認ください。
          </div>
        </div>
      </div>
    );
  }
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepagePolicy />
      </main>
    </Layout>
  );
}
