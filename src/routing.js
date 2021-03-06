import { Router } from '@vaadin/router';

import './views/home-view';
import './views/not-found-view';

export const routing = function() {
  const outlet = this.shadowRoot.getElementById('root');
  const router = new Router(outlet);

  var routes = [
    { path: '/', component: 'home-view' },
    { path: '(.*)', component: 'not-found-view' }
  ];

  router.setRoutes(routes);
};