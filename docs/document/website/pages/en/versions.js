/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const CompLibrary = require("../../core/CompLibrary");
const Container = CompLibrary.Container;
const CWD = process.cwd();
const versions = require(`${CWD}/versions.json`);

const Versions = (props) => {
  const { config: siteConfig } = props;
  const latestVersion = versions[0];
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>kintone UI Component Versions</h1>
          </header>
          <p>本プロジェクトの新しいバージョンは定期的にリリースされます。</p>
          <h3 id="latest">Current version (Stable)</h3>
          <p>現在の最新の安定バージョンです。</p>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  {/* You are supposed to change this href where appropriate
                        Example: href="<baseUrl>/docs(/:language)/:id" */}
                  <a
                    href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                      props.language ? props.language + "/" : ""
                    }getting-started/quick-start`}
                  >
                    Documentation
                  </a>
                </td>
                <td>
                  <a
                    href={`${repoUrl}/releases/tag/v${latestVersion}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Release Notes
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <h3 id="archive">Past Versions</h3>
          <table className="versions">
            <tbody>
              {versions.map(
                (version) =>
                  version !== latestVersion && (
                    <tr key={version}>
                      <th>{version}</th>
                      <td>
                        {/* You are supposed to change this href where appropriate
                        Example: href="<baseUrl>/docs(/:language)/:version/:id" */}
                        <a
                          href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                            props.language ? props.language + "/" : ""
                          }${version}/getting-started/quick-start/`}
                        >
                          Documentation
                        </a>
                      </td>
                      <td>
                        <a
                          href={`${repoUrl}/releases/tag/v${version}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Release Notes
                        </a>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
          <p>
            ※ v0 系のバージョンは
            <a
              href="https://kintone-labs.github.io/kintone-ui-component/latest/versions/"
              target="_blank"
              rel="noreferrer"
            >
              こちら
            </a>
            をご確認ください。
          </p>
          <h3 id="rc">Pre-release versions</h3>
          <p>
            まだリリースされていない最新の変更も下記よりご確認いただけます。
          </p>
          <table className="versions">
            <tbody>
              <tr>
                <th>master</th>
                <td>
                  {/* You are supposed to change this href where appropriate
                        Example: href="<baseUrl>/docs(/:language)/next/:id" */}
                  <a
                    href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                      props.language ? props.language + "/" : ""
                    }next/getting-started/quick-start`}
                  >
                    Documentation
                  </a>
                </td>
                <td>
                  <a href={repoUrl} target="_blank" rel="noreferrer">
                    Source Code
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

module.exports = Versions;
