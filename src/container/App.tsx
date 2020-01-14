import * as React from "react";
import { Switch, Route } from "react-router";
import Page from "./DiconPage";

class App extends React.Component<any, any> {
  static displayName = "App";

  render() {
    return (
      <div
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <Switch>
          <Route path="/" component={Page} />
        </Switch>
      </div>
    );
  }
}

export default App;
