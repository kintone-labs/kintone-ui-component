/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from "@docusaurus/Link";
import {
  useLatestVersion,
  useVersions,
} from "@docusaurus/plugin-content-docs/lib/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import React from "react";

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

export default function Version(): JSX.Element {
  const {
    siteConfig: { title, tagline, organizationName, projectName },
  } = useDocusaurusContext();

  const versions = useVersions(docsPluginId);
  const latestVersion = useLatestVersion(docsPluginId);
  const pastVersions = versions.filter(
    (version) => version !== latestVersion && version.name !== "current"
  );
  const repoUrl = `https://github.com/${organizationName!}/${projectName!}`;
  const currentLanguage = getCurrentLanguage();
  if (currentLanguage === "en") {
    return (
      <Layout>
        <main className="container margin-vert--lg">
          <Heading as="h1">
            <div id="versionsPage.title">Kintone UI Component versions</div>
          </Heading>
          <div className="margin-bottom--lg">
            A new version of this project will be released on a regular basis.
          </div>
          <div className="margin-bottom--lg">
            <Heading as="h3" id="next" style={{ display: "flex" }}>
              <div id="versionsPage.current.title">
                Current version (Stable)
              </div>
            </Heading>
            <p>
              <span id="versionsPage.current.description">
                Here is the current stable version.
              </span>
            </p>
            <table>
              <tbody>
                <tr>
                  <th>{latestVersion.label}</th>
                  <td>
                    <Link
                      to={latestVersion.path + "/" + latestVersion.mainDocId}
                    >
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
                <div id="versionsPage.archived.title">Past versions</div>
              </Heading>
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
        </main>
      </Layout>
    );
  }
  return (
    <Layout>
      <main className="container margin-vert--lg">
        <Heading as="h1">
          <div id="versionsPage.title">kintone UI Component versions</div>
        </Heading>
        <div className="margin-bottom--lg">
          本プロジェクトの新しいバージョンは定期的にリリースされます。
        </div>

        <div className="margin-bottom--lg">
          <Heading as="h3" id="next" style={{ display: "flex" }}>
            <div id="versionsPage.current.title">Current version (Stable)</div>
          </Heading>
          <p>
            <span id="versionsPage.current.description">
              現在の最新の安定バージョンです。
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
              <div id="versionsPage.archived.title">Past versions</div>
            </Heading>
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
      </main>
    </Layout>
  );
}
