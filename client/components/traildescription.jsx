import React from 'react';
import style from '../trail-style.css';

export default class TrailDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row flex-row justify-content-left col-8">
        {/* Template strings (template literals) used for css module format of Bootstrap class names */}
        {/* See webpack.config.js css-loader options for localIdentName syntax of css output */}
        <div className="col">
          <p>Golden Gate Park Trail is a 6.1 mile heavily trafficked loop trail located near San Francisco, California that features a lake and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.</p>

          <div className={`row ${style.stats}`}>
            <div className="col">
              <div className="d-flex justify-content-center">
                Distance<br />
                6.1 miles
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center">
                Elevation Gain<br />
                351 feet
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center">
                Route Type<br />
                Loop
              </div>
            </div>
          </div>

          <div className="row">
            <div className={`${style.col} ${style.tags}`}>
              <span>dogs on leash</span> <span>kid friendly</span> <span>birding</span> <span>hiking</span> <span>mountain biking</span>
              <span>nature trips</span> <span>road biking</span> <span>trail running</span> <span>walking</span> <span>forest</span> <span>lake</span>
              <span>partially paved</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
