import React from 'react';
import style from '../bootstrap.min.css';

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trail: {
        data: {
          attributes: {
            trailName: 'Golden Gate Park Trail',
            distance: 6,
            distanceUnits: 'miles',
            elevationGain: 351,
            elevationUnits: 'ft',
            description: 'Golden Gate Park Trail is a Bernie favorite. A 6.1 mile heavily trafficked loop trail located near San Francisco, California that features a lake and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be approved by Bernie.',
            routeType: 'Loop',
            difficulty: 'Easy',
            generalArea: 'Golden Gate Park',
            origin: 'https://www.alltrails.com/trail/us/california/golden-gate-park-trail',
            tags: ['dogs on leash', 'hiking', 'mountain biking', 'trail running', 'walking', 'views', 'wildlife', 'muddy', 'dog friendly', 'backpacking', 'birding', 'historic site']
          },
          id: '1',
          type: 'trail'
        }
      },
      heroPhoto: {
        data: {
          type: 'trail-photos',
          id: '3',
          attributes: {
            photoUrl: 'http://aws.amazon.com/sdfsdfwe23fdgr.png',
            trailId: '1',
            userId: '33',
            uploadDate: '2018-09-23T22:58:42.900Z',
            caption: 'Buffalo in Golden Gate Park',
            isHeroPhoto: 'true'
          }
        }
      },
      photoCount: {
        data: {
          type: 'trail-photos-count',
          attributes: {
            trailId: '1',
            count: '10'
          }
        }
      }
    };
  }

  render() {
    return (
      <div>
        {/* Template strings (template literals) used for css module format of Bootstrap class names */}
        {/* See webpack.config.js css-loader options for localIdentName syntax of css output */}
        {/* <!-- text/overlay content on banner --> */}
        <div id="banner_content" className="row flex-row justify-content-left align-items-end col-12">
          <div className="trail_title_wpr d-flex">
            <img src="https://via.placeholder.com/975x335.png?text=Golden+Gate+Park+Trail" alt="Golden Gate Park Trail"/>
            {/* <h2>Something something trail name</h2>
            <p>Bernie trail stuff</p> */}
          </div>
        </div>
        {/* <!-- little bubble badges--> */}
        <div id="bubble_menu" className="row flex-row justify-content-around">

          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble d-none d-lg-flex"></div>
          <div className="bubble d-none d-lg-flex"></div>
          <div className="bubble"></div>

        </div>
      </div>
    );
  }
}
