import React from 'react';
import style from '../trail-style.css';

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      trail: {}
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/1/banner')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState( (prevState) => ({
          trail: json,
          fetching: false
        }));
        // console.log('json :', json.data);
      })
      .catch((error) => {
        console.error('fetch banner error: ', error);
      });
  }

  render() {
    return (this.state.fetching) ? (<div className="fetching"></div>) : (
      <div>
        {/* Template strings (template literals) used for css module format of Bootstrap class names */}
        {/* See webpack.config.js css-loader options for localIdentName syntax of css output */}

        <div id="banner_content" className="row flex-row justify-content-left align-items-end col-12">
          <div className="jumbotron-fluid d-flex">
            <img className="heroPhoto img-fluid" src={this.state.trail.photoUrl} alt="hero img" />
            <div className={style.heroStats}>
              <h2>{this.state.trail.trailName}</h2>
              <div className="difficulty">{this.state.trail.difficulty} <span className="reviews">⭐️⭐️⭐️ {this.state.trail.totalReviews} Reviews</span></div>
              <div className="rank">{this.trail.state.trailRank}</div>
              <div className="photoCount">{this.state.trail.photosCount} photos</div>
            </div>
          </div>
        </div>
        {/* <!-- little bubble badges--> */}
        {/* <div id="bubble_menu" className="row flex-row justify-content-around">
          <div className={style.bubble}></div>
          <div className={style.bubble}></div>
          <div className={`style.bubble ${style['d-none']} ${style['d-lg-flex']}`}></div>
          <div className={`style.bubble ${style['d-none']} ${style['d-lg-flex']}`}></div>
          <div className={style.bubble}></div>
        </div> */}
      </div>
    );
  }
}
