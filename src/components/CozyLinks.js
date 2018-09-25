import React, { Component } from 'react';

export default class CozyLinks extends Component {
  LinkWrapper = ({text, href}) => (
    <div className="linkWrapper">
      <a href={href} target="_blank">{text}</a>
    </div>
  )

  render() {
    const  {
      LinkWrapper,
    } = this;

    return (
      <div className="cozyLinksComponent">
        <LinkWrapper
          text="> instagram"
          href="https://www.instagram.com/cozyboycries/"
        />
        <LinkWrapper
          text="> twitter"
          href="https://twitter.com/cozyboycries"
        />
        <LinkWrapper
          text="> spotify"
          href="https://open.spotify.com/artist/3sWtaNsmsCx0TFaQkP8QAm?si=8zcyAYlfTMuRME0CeHKhAw"
        />
        <LinkWrapper
          text="> youtube"
          href="https://www.youtube.com/channel/UCYSVaeSEO2vNdD-gep0fiMQ?view_as=subscriber"
        />
        <LinkWrapper
          text="a bedrøøm støry ig story"
          href="https://imgur.com/a/PFfNCHR"
        />
        <LinkWrapper
          text="a bedrøøm støry ig post"
          href=""
        />
      </div>
    );
  }
}
