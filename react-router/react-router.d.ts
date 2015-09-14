// Type definitions for React Router 1.0.0-rc1
// Project: https://github.com/rackt/react-router
// Definitions by: Ben Fletcher (@bjfletcher)
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare namespace ReactRouter {

  import React = __React;

  class Router extends React.Component<{}, {}> {}

  // Route
  // --------------------------------------------------------------------------

  interface RouteProps {
    path: string;
    component: any;
  }

  class Route extends React.Component<RouteProps, {}> {}

  // IndexRoute
  // --------------------------------------------------------------------------

  interface IndexRouteProps {
    component: any;
  }

  class IndexRoute extends React.Component<IndexRouteProps, {}> {}

}
