import React, { Component } from 'react';

import './Epk.css';

export default class Epk extends Component {
  render() {
    return (
      <div className="epkComponent">
        <h1>CØZYBØY EPK</h1>

        <div className="epkInfoSection">
          <h2>BIO</h2>
          <p>making music for the heartbroken and dejected <span role="img" aria-label="sad-rose">🥀</span><span role="img" aria-label="blue-heart">💙</span></p>
        </div>

        <div className="epkInfoSection">
          <h2>SOCIAL LINKS</h2>
          <div className="epkSocialLinks">
            <a
              href="https://www.instagram.com/cozyboycries/"
              target="_blank"
            >instagram</a>
            <a
              href="https://twitter.com/cozyboycries"
              target="_blank"
            >twitter</a>
            <a
              href="https://open.spotify.com/artist/3sWtaNsmsCx0TFaQkP8QAm?si=8zcyAYlfTMuRME0CeHKhAw"
              target="_blank"
            >spotify</a>
            <a
              href="https://soundcloud.com/cozyboycries"
              target="_blank"
            >soundcloud</a>
            <a
              href="https://www.youtube.com/channel/UCYSVaeSEO2vNdD-gep0fiMQ?view_as=subscriber"
              target="_blank"
            >youtube</a>
            <a
              href="https://www.teespring.com/stores/cozyboy"
              target="_blank"
            >merch</a>
          </div>
        </div>

        <div className="epkInfoSection">
          <h2>IMAGES</h2>
          <img src="/cozy-183.jpg" className="epkImage" />
          <img src="/cozy-128.jpg" className="epkImage" />
          <img src="/cozy-170.jpg" className="epkImage" />
          <img src="/cozy-197.jpg" className="epkImage" />
        </div>

        <div className="epkInfoSection">
          <h2>DOWNLOADABLE ASSETS</h2>
          <a
            href="https://drive.google.com/drive/folders/1rUOR5pKXeFZ78nFIgh17Pzl8-t7-OTtv?usp=sharing"
            target="_blank"
          >Google Drive Assets</a>

        </div>
      </div>
    )
  }
}
