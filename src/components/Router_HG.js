import React from "react";
import Login from "routers/Login";
import Signup from "routers/Signup";
import Public from "routers/Public";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter2 = ({ onLoggedIn }) => {
  return (
    <Switch>
      <Router>
        <Route exact path="/">
          <Login onLoggedIn={onLoggedIn} />
        </Route>
        {/* <Route exact path="/public">
          <Public />
        </Route> */}
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Router>
    </Switch>
  );
};

export default AppRouter2;
