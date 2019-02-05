import React, { Component } from 'react';

import './Epk.css';

export default class Epk extends Component {
  constructor(props) {
    super(props);

    const search = props.location.search;

    this.state = {
      isStats: search.includes('stats=true'),
    }
  }

  stats() {
    return (
      <div>
        <p style={{paddingTop: 16}}>Spotify Homepage</p>
        <img src="/cozy-spotify-homepage.png" className="epkImage" style={{marginLeft: 0}} />
        <p style={{paddingTop: 32}}>Spotify Listeners</p>
        <img src="/cozy-spotify-listeners.png" className="epkImage" style={{marginLeft: 0}} />
        <p style={{paddingTop: 32}}>Spotify Streams</p>
        <img src="/cozy-spotify-streams.png" className="epkImage" style={{marginLeft: 0}} />
        <p style={{paddingTop: 32}}>Spotify Followers</p>
        <img src="/cozy-spotify-followers.png" className="epkImage" style={{marginLeft: 0}} />
        <p style={{paddingTop: 32}}>Spotify Homepage</p>
        <img src="/cozy-engagement-stats.png" className="epkImage" style={{marginLeft: 0}} />
        <p style={{paddingTop: 32}}>Spotify Stats</p>
        <object data="/spotify-for-artists-cozy-stats.pdf" type="application/pdf" width="100%" height="600">
          <p>Alternative text - include a link <a href="/spotify-for-artists-cozy-stats.pdf">to the PDF!</a></p>
        </object>
      </div>
    )
  }

  render() {
    const {
      showStats,
      isStats,
    } = this.state;

    return (
      <div className="epkComponent">
        <h1>CØZYBØY EPK</h1>

        <div className="epkInfoSection">
          <h2>BIO</h2>
          <p>making music for the heartbroken and dejected <span role="img" aria-label="sad-rose">🥀</span><span role="img" aria-label="blue-heart">💙</span></p>
        </div>

        <div className="epkInfoSection">
          <h2>LATEST SINGLE: "breakup // breakdøwn"</h2>
          <p>
            a song about a breakup and what comes with it––guilt, loneliness, and second-guessing the decision.
          </p>
        </div>

        <div className="epkInfoSection">
          <h2>A BEDRØØM STØRY</h2>
          <p>
            a vulnerable musical project that wades through the various stages of a modern relationship in an unconventional way. in a lurid landscape fraught with one night stands, hook ups, polyamory, monogamy, parties, isolation, and late nights that turn to early mornings, cøzybøy details his bedroom story with real recorded conversations, foley sound effects, and poignant lyrics.
          </p>
        </div>

        <div className="epkInfoSection">
          <h2>SOCIAL LINKS</h2>
          <div className="epkSocialLinks">
            <a
              href="https://open.spotify.com/artist/3sWtaNsmsCx0TFaQkP8QAm?si=8zcyAYlfTMuRME0CeHKhAw"
              target="_blank"
            >spotify</a>
            <a
              href="https://www.instagram.com/cozyboycries/"
              target="_blank"
            >instagram</a>
            <a
              href="https://www.youtube.com/channel/UCYSVaeSEO2vNdD-gep0fiMQ?view_as=subscriber"
              target="_blank"
            >youtube</a>
            <a
              href="https://soundcloud.com/cozyboycries"
              target="_blank"
            >soundcloud</a>
            <a
              href="https://twitter.com/cozyboycries"
              target="_blank"
            >twitter</a>
            <a
              href="https://www.teespring.com/stores/cozyboy"
              target="_blank"
            >merch</a>
          </div>
        </div>

        <div className="epkInfoSection">
          <h2>IMAGES</h2>
          <img src="/cozy-epk-6.jpg" className="epkImage" />
          <img src="/cozy-epk-7.jpg" className="epkImage" />
          <img src="/cozy-epk-2.jpg" className="epkImage" />
          <img src="/cozy-epk-1.jpg" className="epkImage" />
          <img src="/cozy-170.jpg" className="epkImage" />
          <img src="/cozy-epk-5.jpg" className="epkImage" />
          <img src="/cozy-epk-3.jpg" className="epkImage" />
          <img src="/cozy-epk-4.jpg" className="epkImage" />
          <img src="/cozy-all-our-bones.png" className="epkImage" />
          <img src="/cozy-what-did-you-1.png" className="epkImage" />
          <img src="/cozy-what-did-you-2.png" className="epkImage" />
        </div>

        <div className="epkInfoSection">
          <h2>MUSIC VIDEOS</h2>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/P30f0721ALo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/oDIo7OtODwo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/tOiMmBbYwSw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className="epkInfoSection">
          <h2>PUBLICATIONS</h2>
          <a
            href="https://www.elevatormag.com/cozyboy-and-lil-zubin-connect-for-new-song-how-to-talk-to-girls-at-parties/"
            target="_blank"
          >ELEVATOR: høw tø talk tø girls at parties (single)</a>
          <br/>
          <a
            href="https://undergroundunderdogs.com/articles/cozyboy-wears-his-heart-on-his-sleeve-with-a-bedroom-story/"
            target="_blank"
          >UNDERGROUND UNDERDOGS: a bedrøøm støry (project)</a>
          <br/>
          <a
            href="https://undergroundunderdogs.com/articles/machiavelli-novella/"
            target="_blank"
          >UNDERGROUND UNDERDOGS: machiavelli nøvella (ep)</a>
          <br/>
          <a
            href="https://suicide.clothing/blogs/fml/cozyboy"
            target="_blank"
          >SUICIDE CLOTHING: cøzybøy FML interview</a>
        </div>

        <div className="epkInfoSection">
          <h2>DOWNLOADABLE ASSETS</h2>
          <a
            href="https://drive.google.com/drive/folders/1rUOR5pKXeFZ78nFIgh17Pzl8-t7-OTtv?usp=sharing"
            target="_blank"
          >Google Drive Assets</a>
        </div>

        {isStats ?
          <div className="epkInfoSection">
            <h2 className="clickableInfoSection">
              SPOTIFY STATS
            </h2>
            {this.stats()}
          </div>
          :
          null
        }

      </div>
    )
  }
}
