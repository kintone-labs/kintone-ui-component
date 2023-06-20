/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import {
  useVersions,
  useLatestVersion,
} from "@docusaurus/plugin-content-docs/lib/client";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

const docsPluginId = undefined; // Default docs plugin instance

function DocumentationLabel() {
  return <div id="versionsPage.versionEntry.link">Documentation</div>;
}

function ReleaseNotesLabel() {
  return <div id="versionsPage.versionEntry.releaseNotes">Release Notes</div>;
}

function getCurrentLanguage() {
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl;
  if (baseUrl.includes("/ja/")) return "ja";
  return "en";
}

function V0Infomation() {
  const currentLanguage = getCurrentLanguage();
  if (currentLanguage === "en") {
    return (
      <div>
        ※ Please find the version of v0 series
        <a
          href="https://kintone-labs.github.io/kintone-ui-component/latest/versions/"
          target="_blank"
          rel="noreferrer"
        > here </a>.
      </div>
    );
  } else {
    return (
      <div>
        ※ v0 系のバージョンは
        <a
          href="https://kintone-labs.github.io/kintone-ui-component/latest/versions/"
          target="_blank"
          rel="noreferrer"
        >こちら</a>をご確認ください。
      </div>
    );
  }
}

export default function Version(): JSX.Element {
  const {
    siteConfig: { organizationName, projectName },
  } = useDocusaurusContext();

  const versions = useVersions(docsPluginId);
  const latestVersion = useLatestVersion(docsPluginId);
  const pastVersions = versions.filter(
    (version) => version !== latestVersion && version.name !== "current"
  );
  const repoUrl = `https://github.com/${organizationName!}/${projectName!}`;
  const currentLanguage = getCurrentLanguage();

  return (
    <Layout
      title="Versions"
      description="Docusaurus 2 Versions page listing all documented site versions"
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">
          <div id="versionsPage.title">Kintone UI Component versions</div>
        </Heading>

        <div className="margin-bottom--lg">
          <Heading as="h3" id="next" style={{ display: "flex" }}>
            <div id="versionsPage.current.title">Current version (Stable)</div>
          </Heading>
          <p>
            <span id="versionsPage.current.description">
              Here you can find the documentation for current released version.
            </span>
          </p>
          <table>
            <tbody>
              <tr>
                <th>{latestVersion.label}</th>
                <td>
                  <Link to={latestVersion.path + "/" + latestVersion.mainDocId}>
                    <DocumentationLabel />
                  </Link>
                </td>
                <td>
                  <Link to={`${repoUrl}/releases/tag/v${latestVersion.name}`}>
                    <ReleaseNotesLabel />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {pastVersions.length > 0 && (
          <div className="margin-bottom--lg">
            <Heading as="h3" id="archive" style={{ display: "flex" }}>
              <div id="versionsPage.archived.title">
                Past versions (Not maintained anymore)
              </div>
            </Heading>
            <p>
              <span id="versionsPage.archived.description">
                Here you can find documentation for previous versions.
              </span>
            </p>
            <table>
              <tbody>
                {pastVersions.map((version) => (
                  <tr key={version.name}>
                    <th>{version.label}</th>
                    <td>
                      <Link to={version.path + "/" + latestVersion.mainDocId}>
                        <DocumentationLabel />
                      </Link>
                    </td>
                    <td>
                      <Link href={`${repoUrl}/releases/tag/v${version.name}`}>
                        <ReleaseNotesLabel />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <V0Infomation />
      </main>
    </Layout>
  );
}
