import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';
import usecaseImageUrl from '@site/static/img/usecase_button.png';

function getCurrentLanguage() {
  const {siteConfig} = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl;
  if(baseUrl.includes("/ja/")) return "ja";
  return "en";
}

function getKucCodeExample() {
  return `kintone.events.on('app.record.index.show', event => {
  const Kuc = Kucs['1.x.x'];

  const header = kintone.app.getHeaderMenuSpaceElement();

  const buttonSubmit = new Kuc.Button({
    text: 'Submit',
    type: 'submit'
  });
  buttonSubmit.addEventListener('click', event => {
    console.log(event);
  });

  const buttonAlert = new Kuc.Button({
    text: 'Alert',
    type: 'alert'
  });
  buttonAlert.addEventListener('click', event => {
    console.log(event);
  });

  header.appendChild(buttonSubmit);
  header.appendChild(buttonAlert);
});`;
}

export default function HomepageFeatures() {
  const currentLanguage = getCurrentLanguage();
  if(currentLanguage === "en")
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            <div className="usecase">
              <h2 align="center">Use Case</h2>
              <div className="usecase_sentense" align="center">
                <span>Kintone UI Component allows you to create Kintone-like components easily. This library is useful to build Kintone customization and plug-in.</span>
              </div>
              <div className="usecase_group">
                <h6>[ Sample code & the Button Component image ]</h6>
                <div className="usecase_image">
                  <img src={usecaseImageUrl} alt="button usecase" />
                </div>
                <div className="usecase_code">
                  <CodeBlock language="jsx">{getKucCodeExample()}</CodeBlock>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  else
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            <div className="usecase">
              <h2 align="center">Use Case</h2>
              <div className="usecase_sentense" align="center">
                <span>kintone UI Component は、kintone 一覧画面のヘッダーメニュー要素など取得できる要素、kintone プラグイン設定画面やカスタマイズビューに配置することで、kintone ライクな見た目を実現することができます。</span>
              </div>
              <div className="usecase_group">
                <h6>[ Button Component イメージ & サンプルコード ]</h6>
                <div className="usecase_image">
                  <img src={usecaseImageUrl} alt="button usecase" />
                </div>
                <div className="usecase_code">
                  <CodeBlock language="jsx">{getKucCodeExample()}</CodeBlock>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
