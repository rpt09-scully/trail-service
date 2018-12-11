import Banner from './components/banner.jsx';
import TrailDescription from './components/traildescription.jsx';

if (window.NT === undefined) {
  window.NT = {
    TrailService: {
      Banner: {},
      TrailDescription: {}
    }
  };
} else if (window.NT) {
  window.NT.TrailService = {
    Banner: {},
    TrailDescription: {}
  };
}

window.NT.TrailService.Banner = Banner;
window.NT.TrailService.TrailDescription = TrailDescription;
