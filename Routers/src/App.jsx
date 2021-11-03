import React from 'react';
import Users from './Users';
import Home from './Home';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
