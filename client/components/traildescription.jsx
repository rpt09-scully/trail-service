import React from 'react';
import style from '../trail-style.css';

export default class TrailDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      trailDesc: {}
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/1/trailDescription')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState( (prevState) => ({
          trailDesc: json,
          fetching: false
        }));
        // console.log('json :', json.data);
      })
      .catch((error) => {
        console.error('fetch trailDesc error: ', error);
      });
  }

  render() {
    const trailTags = this.state.trailDesc.tags.map((tag) => <span>tag</span>);

    return (this.state.fetching) ? (<div className="fetching"></div>) : (
      <div className="row flex-row justify-content-left col-8">
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
                {this.state.trailDesc.elevation} {this.state.trailDesc.elevationUnits}
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
