/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

const translate = require('../../server/translate.js').translate;

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `${siteConfig.repoUrl}/edit/master/website/siteConfig.js`;
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1><translate>Who is Using This?</translate></h1>
              <p><translate>This project is used by many folks</translate></p>
            </div>
            <div className="logos">{showcase}</div>
            <p><translate>Are you using this project?</translate></p>
            <a href={editUrl} className="button">
              <translate>Add your company</translate>
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
