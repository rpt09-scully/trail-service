import React from 'react';

export default class Trail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>

        <div id="banner" className="row flex-row justify-content-center col-12">
          {/* <!-- text/overlay content on banner --> */}
          <div id="banner_content" className="row flex-row justify-content-left align-items-end col-12">
            <div className="trail_title_wpr">
              <h2>Something something trail name</h2>
              <p>Bernie trail stuff</p>
            </div>
          </div>
          {/* <!-- little bubble badges--> */}
          <div id="bubble_menu" className="row flex-row justify-content-around">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble d-none d-lg-flex"></div>
            <div className="bubble d-none d-lg-flex"></div>
            <div className="bubble d-none d-lg-flex"></div>
            <div className="bubble"></div>
          </div>
        </div>

        <div id="main_content" className="row col-12 justify-content-left">
          <div className="left_col col-sm-12 col-md-6 col-lg-8">
            <div className="wrapper">
              {/* <!-- description tags etc --> */}
              <div id="trail_description" className="servicePlaceholder row flex-row justify-content-center align-items-center">
                <h5>trail description + tags</h5>
              </div>
            </div> {/* <!-- end wrapper --> */}
          </div>
        </div>

      </div>
    );
  }
}
