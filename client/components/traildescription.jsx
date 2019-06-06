import React from 'react';
import axios from 'axios';
import getTrailId from '../helpers/getId';
import style from '../css/trailDescStyle.css';

export default class TrailDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTrail: getTrailId(),
      trailDesc: null
    };
  }

  componentDidMount() {
    let endpoint = (process.env.ENVIRONMENT === 'prod') ? `http://trail-env.8jhbbn2nrv.us-west-2.elasticbeanstalk.com/${this.state.activeTrail}/trailDescription` : `http://localhost:3001/${this.state.activeTrail}/trailDescription`;
    this._asyncRequest = axios.get(endpoint)
      .then(response => {
        this._asyncRequest = null;
        this.setState({ trailDesc: response.data });
      })
      .catch((error) => {
        console.error('axios trailDesc error: ', error);
      });
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    if (this.state.trailDesc === null) {
      // Render loading state...
      return <div className="fetching"></div>;
    } else {
      const trailTags = this.state.trailDesc.tags.map((tag, i) => <span key={i}>{tag}</span>);
      return (
        <div className={`${style.trailDesc} row flex-row justify-content-left col-8`}>
          {/* Template strings (template literals) used for css module format of Bootstrap class names */}
          {/* See webpack.config.js css-loader options for localIdentName syntax of css output */}
          <div className="col">
            <p>{this.state.trailDesc.description}</p>

            <div className={`row ${style.stats}`}>
              <div className="col">
                <div className="d-flex justify-content-center">
                  Distance<br />
                  {this.state.trailDesc.distance} {this.state.trailDesc.distanceUnits}
                </div>
              </div>
              <div className="col">
                <div className="d-flex justify-content-center">
                  Elevation Gain<br />
                  {this.state.trailDesc.elevationGain} {this.state.trailDesc.elevationUnits}
                </div>
              </div>
              <div className="col">
                <div className="d-flex justify-content-center">
                  Route Type<br />
                  {this.state.trailDesc.routeType}
                </div>
              </div>
            </div>

            <div className="row">
              <div className={`${style.col} ${style.tags}`}>
                {trailTags}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
