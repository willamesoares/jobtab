import React, { Component } from 'react'

const SHARE_MESSAGE = 'Try the Chrome extension developed for job hunters - JobTab'

class ShareExtensionButton extends Component {
  render () {
    return (
      <div className="share-extension center">
        <div className="share-extension__button">
          <a
            href={`https://twitter.com/share?url=https://chrome.google.com/webstore/detail/jobtab/pamlioaljgkpkgnmbedlbekgnoodgeeo&hashtags=jobtab%2Cchrome-extension&text=${SHARE_MESSAGE}`}
            target="_blank">
            <img src="https://raw.githubusercontent.com/diemano/chingu-extension/master/src/turtle.png" />
          </a>
        </div>
        <div className="share-extension__label">share this extension</div>
      </div>
    )
  }
}

export default ShareExtensionButton
