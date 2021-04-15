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
(() => {
  'use strict';

  kintone.events.on('app.record.index.show', event => {
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
})();

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

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.tagline}
        <span> with </span>
        <span className="titleText">{props.title}</span>
        <span>.</span>
        <small>{props.subTagline}</small>
      </h2>
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
          <span>
            Kintone UI Component is a kintone
            Elements that can be retrieved, such as header menu elements in the list screen, Kintone
            On the plug-in Settings screen and the customized view, Kintone
            You can achieve a similar look.
          </span>
        </div>
        <div className="usecase_group">
          <h6>[ Sample code & the Button Component image  ]</h6>
          <div className="usecase_image">
            <img src="img/usecase_button.png" alt="button usecase" />
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
            <p>
              <strong className="quoteTop_title">Support Policy</strong>
              <br />
              <br />
              kintone UI Component
              You can contact technical support for the specifications.
              <br />
              <a
                href="https://faq.cybozu.info/alphascope/cybozu/web/kintone/Detail.aspx?id=1763"
                target="_blank"
                rel="noreferrer"
              >
                How to contact Support
              </a>
              Confirm the request.
              <br />
              <br />
              Other{" "}
              <a
                href="https://github.com/kintone-labs/kintone-ui-component/issues/new/choose"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Issue
              </a>{" "}
              You can ask questions or request feature requests.
              <br />
              <br />
              You can change the source code, redistribute it, and use it in accordance with the license.
              <br />
              The license type is the client library page or GitHub.
              Confirm with the repository.
            </p>
          </blockquote>
        </div>
      </Container>
    );

    return (
      <div>
        <SplashContainer>
          <div className="inner">
            <ProjectTitle
              tagline={siteConfig.tagline}
              title={siteConfig.title}
              subTagline={siteConfig.subTagline}
            />
            <PromoSection>
              <Button href={docUrl("getting-started/quick-start.html")}>
                Get Started
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
