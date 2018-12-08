import React from 'react';
import style from '../bootstrap.min.css';

export default class TrailDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* Template strings (template literals) used for css module format of Bootstrap class names */}
        {/* See webpack.config.js css-loader options for localIdentName syntax of css output */}
        
        <h5>trail description + tags</h5>

      </div>
    );
  }
}
