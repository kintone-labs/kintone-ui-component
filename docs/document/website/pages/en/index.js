/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const translate = require("../../server/translate.js").translate;

const textContent = {
  codeExample: `
\`\`\`javascript
kintone.events.on('app.record.index.show', event => {
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
});

\`\`\`
  `,
};

class Index extends React.PureComponent {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;
    const imgUrl = (url) => `${baseUrl}${url}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = (props) => (
      <div>
        {(() => {
          if (language === "ja") {
            return (
              <h2 className="projectTitle">
                Be a smart kintone developer
                <span> with </span>
                <span className="titleText">kintone UI Component</span>
                <span>.</span>
                <small>{props.subTagline}</small>
              </h2>
            );
          }
          return (
            <h2 className="projectTitle">
              Be a smart Kintone developer
              <span> with </span>
              <span className="titleText">Kintone UI Component</span>
              <span>.</span>
              <small>{props.subTagline}</small>
            </h2>
          );
        })()}
      </div>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button buttonTop" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    const UseCase = () => (
      <Container padding={["bottom", "top"]}>
        <h2 align="center">Use Case</h2>
        <div className="usecase_sentense" align="center">
          {(() => {
            if (language === "ja") {
              return (
                <span>
                  kintone UI Component は、kintone
                  一覧画面のヘッダーメニュー要素など取得できる要素、kintone
                  プラグイン設定画面やカスタマイズビューに配置することで、kintone
                  ライクな見た目を実現することができます。
                </span>
              );
            }
            return (
              <span>
                Kintone UI Component allows you to create Kintone-like
                components easily. This library is useful to build Kintone
                customization and plug-in.
              </span>
            );
          })()}
        </div>
        <div className="usecase_group">
          {(() => {
            if (language === "ja") {
              return <h6>[ Button Component イメージ & サンプルコード ]</h6>;
            }
            return <h6>[ Sample code & the Button Component image ]</h6>;
          })()}
          <div className="usecase_image">
            <img src={imgUrl("img/usecase_button.png")} alt="button usecase" />
          </div>
          <div className="usecase_code">
            <MarkdownBlock>{textContent.codeExample}</MarkdownBlock>
          </div>
        </div>
      </Container>
    );

    const Description = () => (
      <Container padding={["bottom", "top"]}>
        <div className="descriptionSection" style={{ textAlign: "left" }}>
          <blockquote className="quoteTop">
            {(() => {
              if (language === "ja") {
                return (
                  <p>
                    <strong className="quoteTop_title">Support Policy</strong>
                    <br />
                    <br />
                    kintone UI Component
                    の仕様については、テクニカルサポートへお問い合わせいただけます。
                    <br />
                    <a
                      href="https://faq.cybozu.info/alphascope/cybozu/web/kintone/Detail.aspx?id=1763"
                      target="_blank"
                      rel="noreferrer"
                    >
                      サポートへのお問い合わせ方法
                    </a>
                    をご確認の上、お問合せください。
                    <br />
                    <br />
                    その他{" "}
                    <a
                      href="https://github.com/kintone-labs/kintone-ui-component/issues/new/choose"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub Issue
                    </a>{" "}
                    にてご質問や機能リクエストを受け付けております。
                    <br />
                    <br />
                    ソースコードの変更、再配布および商用利用等は、ライセンスに従ってご利用可能です。
                    <br />
                    ライセンスの種別は GitHub のリポジトリでご確認ください。
                  </p>
                );
              }
              return (
                <p>
                  <strong className="quoteTop_title">Support Policy</strong>
                  <br />
                  <br />
                  You can ask questions and/or submit requests on
                  <a
                    href="https://github.com/kintone-labs/kintone-ui-component/issues/new/choose"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    GitHub Issue
                  </a>
                  .
                  <br />
                  <br />
                  You are allowed to change the source code, redistribute it,
                  and use it in accordance with the license.
                  <br />
                  For more details of the license type please refer to the
                  GitHub repository.
                </p>
              );
            })()}
          </blockquote>
        </div>
      </Container>
    );

    return (
      <div>
        <SplashContainer>
          <div className="inner">
            <ProjectTitle subTagline={siteConfig.subTagline} />
            <PromoSection>
              <Button href={docUrl("getting-started/quick-start.html")}>
                Getting Started
              </Button>
            </PromoSection>
          </div>
        </SplashContainer>
        <div className="mainContainer">
          <UseCase />
          <Description />
        </div>
      </div>
    );
  }
}

module.exports = Index;
