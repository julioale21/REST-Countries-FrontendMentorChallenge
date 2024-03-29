import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
}

export default App;
