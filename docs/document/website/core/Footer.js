/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Documentation</h5>
            <a
              href={this.docUrl(
                "getting-started/quick-start.html",
                this.props.language
              )}
            >
              Quick Start
            </a>
            <a
              href={this.docUrl(
                "components/desktop/button.html",
                this.props.language
              )}
            >
              Components
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://developer.cybozu.io/hc/ja/community/topics"
              target="_blank"
              rel="noreferrer noopener"
            >
              cybozu developer network community topic
            </a>
            <a
              href="https://github.com/kintone-labs/kintone-ui-component/issues"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub issue
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
