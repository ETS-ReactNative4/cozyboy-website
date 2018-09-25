import React, { Component } from 'react';

export default class HomePage extends Component {
  ContentWrapper = ({children}) => (
    <div className="contentWrapper">
      {children}
    </div>
  )

  render() {
    const  {
      ContentWrapper,
    } = this;

    return (
      <div className="homePageComponent">
        <ContentWrapper>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/_qLuKFpOL-o"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </ContentWrapper>

        <ContentWrapper>
          <iframe
            src="https://open.spotify.com/embed/artist/3sWtaNsmsCx0TFaQkP8QAm"
            width="100%"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </ContentWrapper>

        <ContentWrapper>
          <iframe
            src="https://open.spotify.com/embed/album/2tkcttCqcy7CLqDUl32UzB"
            width="100%"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </ContentWrapper>

        <ContentWrapper>
          <iframe
            width="100%"
            height="450"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/316780769&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </ContentWrapper>
      </div>
    );
  }
}
