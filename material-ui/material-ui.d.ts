// Type definitions for Material UI 0.11.0
// Project: https://github.com/callemall/material-ui
// Definitions by: Ben Fletcher (@bjfletcher)
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare namespace MUI {

  namespace Styles {
    function ThemeManager(): void;
    namespace Colors {
      var yellow200: string;
      var deepOrange500: string;
    }
  }

  // LeftNav
  // --------------------------------------------------------------------------

  interface LeftNavProps extends React.Props<any> {
    docked?: boolean;
    header?: JSX.Element;
    menuItems?: Array<{route: string, text: string}>;
    onChange?: () => void;
  }

  class LeftNav extends React.Component<LeftNavProps, {}> {}

  // AppBar
  // --------------------------------------------------------------------------

  interface AppBarProps extends React.Props<any> {
    title?: string;
    onLeftIconButtonClick?: () => void;
  }

  class AppBar extends React.Component<AppBarProps, {}> {}

}
