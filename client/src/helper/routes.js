import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import UserContainer from "../container/userContainer";
import CompanyContainer from "../container/companyContainer";

function RouteComponent() {
  return (
    <Switch>
      <Route exact path="/" component={UserContainer} />
      <Route exact path="/company" component={CompanyContainer} />
      <Route exact path="/user" component={UserContainer} />
    </Switch>
  );
}

export default withRouter(RouteComponent);
