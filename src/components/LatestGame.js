import React from 'react';
import './LatestGame.css';
import { Play } from 'react-ionicons';

const LatestGame = () => {
  return (
    <div className='section-wrapper'>
      <section className="section latest-game" aria-label="latest game">
        <div className="container">

          <p className="section-subtitle">Latest Releases</p>

          <h2 className="h2 section-title">
            Create &amp; <span className="span">Manage</span>
          </h2>

          <ul className="has-scrollbar">

            <li className="scrollbar-item">
              <div className="latest-game-card">

                <figure className="card-banner img-holder" width="400" height="470">
                  <img src="/images/latest-game-1.jpg" width="400" height="470" loading="lazy" alt="White Walker Daily" className="img-cover" />
                </figure>

                <div className="card-content">

                  <a href="#" className="card-badge skewBg">Zombie</a>

                  <h3 className="h3">
                    <a href="#" className="card-title">White Walker <span className="span">Daily</span></a>
                  </h3>

                  <p className="card-price">
                    Entry Fee : <span className="span">Free</span>
                  </p>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="latest-game-card">

                <figure className="card-banner img-holder" width="400" height="470">
                  <img src="/images/latest-game-2.jpg" width="400" height="470" loading="lazy" alt="Hunter Killer II" className="img-cover" />
                </figure>

                <div className="card-content">

                  <a href="#" className="card-badge skewBg">Adventure</a>

                  <h3 className="h3">
                    <a href="#" className="card-title">Hunter Killer <span className="span">II</span></a>
                  </h3>

                  <p className="card-price">
                    Entry Fee : <span className="span">$25.00</span>
                  </p>

                </div>

              </div>
            </li>

            <li className="scrollbar-item">
              <div className="latest-game-card">

                <figure className="card-banner img-holder" width="400" height="470">
                  <img src="/images/latest-game-3.jpg" width="400" height="470" loading="lazy" alt="Cyberpunk Daily" className="img-cover" />
                </figure>

                <div className="card-content">

                  <a href="#" className="card-badge skewBg">Action</a>

                  <h3 className="h3">
                    <a href="#" className="card-title">Cyberpunk <span className="span">Daily</span></a>
                  </h3>

                  <p className="card-price">
                    Entry Fee : <span className="span">$25.00</span>
                  </p>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
      <section className="section live-match" id="live" aria-label="live match">
            <div className="container">

                <h2 className="h2 section-title">
                    Watch Live <span className="span">Match</span>
                </h2>

                <figure className="live-match-banner img-holder" width='800' height='470'>
                    <img src="/images/live-match-banner.png" width="800" height="470" loading="lazy" alt="Live Match Video" className="img-cover" />

                    <button className="play-btn" aria-label="play video">
                        <Play
                            color={'var(--marigold)'}
                            height="120px"
                            width="120px"
                            role="img" className="md hydrated" aria-label="play"
                        />
                    </button>

                </figure>

                <div className="live-match-player">

                    <figure className="player player-1 img-holder" width="406" height="277">
                        <img src="/images/live-match-player-1.png" width="406" height="277" loading="lazy" alt="tokyo eagle" className="w-100" />
                    </figure>

                    <div className="live-match-detail">

                        <p className="live-match-subtitle">Upcoming Live Matches</p>

                        <time className="live-match-time" dateTime="08:30">08:30</time>

                    </div>

                    <figure className="player player-2 img-holder" width='400' height='305'>
                        <img src="/images/live-match-player-2.png" width="400" height="305" loading="lazy" alt="new york hunter7" className="w-100" />
                    </figure>

                </div>

            </div>
        </section>
    </div>
  );
}

export default LatestGame;