import React from 'react';
import style from '../bootstrap.min.css';

export default class Trail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* Template strings (template literals) used for css module format of Bootstrap class names */}
        {/* See webpack.config.js css-loader options for localIdentName syntax of css output */}
        <div id="banner" className={ `${style.row} ${style['flex-row']} ${style['justify-content-center']} ${style['col-12']}` }>
          {/* <!-- text/overlay content on banner --> */}
          <div id="banner_content" className={ `${style.row} ${style['flex-row']} ${style['justify-content-left']} ${style['align-items-end']} ${style['col-12']}` }>
            <div className={ `${style['trail_title_wpr']}` }>
              <h2>Something something trail name</h2>
              <p>Bernie trail stuff</p>
            </div>
          </div>
          {/* <!-- little bubble badges--> */}
          <div id="bubble_menu" className={ `${style.row} ${style['flex-row']} ${style['justify-content-around']}` }>

            <div className={ `${style.bubble}` }></div>
            <div className={ `${style.bubble}` }></div>
            <div className={ `${style.bubble} ${style['d-none']} ${style['d-lg-flex']}` }></div>
            <div className={ `${style.bubble} ${style['d-none']} ${style['d-lg-flex']}` }></div>
            <div className={ `${style.bubble} ${style['d-none']} ${style['d-lg-flex']}` }></div>
            <div className={ `${style.bubble}` }></div>
          </div>
        </div>

        <div id="main_content" className={ `${style.row} ${style['col-12']} ${style['justify-content-left']}` }>
          <div className={ `${style['left_col']} ${style['col-sm-12']} ${style['col-md-6']} ${style['col-lg-8']}` }>
            <div className={ `${style.wrapper}` }>
              {/* <!-- description tags etc --> */}
              <div id="trail_description" className={ `${style.servicePlaceholder} ${style.row} ${style['flex-row']} ${style['justify-content-center']} ${style['align-items-center']}` }>
                <h5>trail description + tags</h5>
              </div>
            </div> {/* <!-- end wrapper --> */}
          </div>
        </div>

      </div>
    );
  }
}
