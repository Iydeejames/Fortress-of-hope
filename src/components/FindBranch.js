import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FindBranch from './FindBranch';
import BranchDetails from './BranchDetails'; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FindBranch} />
        <Route path="/locations" component={BranchDetails} />
      </Switch>
    </Router>
  );
}

export default App;
