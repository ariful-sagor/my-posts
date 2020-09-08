import React from 'react';
import Home from './components/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Details from './components/details/Details';
// import NotFound from './components/NotFound/NotFound';

function App() {

  return (
    <div>

      <Router>
      <Switch>
        <Route path="/details/:postId">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/my-posts">
            <Home />
          </Route>
          
          
          {/* <Route path="*">
            <NotFound></NotFound>
          </Route> */}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
