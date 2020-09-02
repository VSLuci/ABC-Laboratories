import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
// import Header from "./Components/Header/Header";
import HomePage from "./Components/Home/Index";
import LogIn from "./Components/LogIn/LogIn";

const customHistory = createBrowserHistory({
  basename: '/abc'
})

const PublicRoute = props => <Route {...props} />;

const PrivateRoute = ({ path, component: Component }) => {
  const loggedIn = sessionStorage.getItem('json_token');
  if (!loggedIn) {
    return <Redirect to='/login' />
  }

  return (
    <Route path={path} render={props => {
      return (
        <Component {...props} />
      )
    }} />
  )
}

class App extends Component {

  render() {
    return (
      <Router basename={'/abc'} history={customHistory}>
        <Switch>
          <PublicRoute path='/login' component={LogIn} />
          <PrivateRoute path='/home' component={HomePage} />
        </Switch>
      </Router>
    )
  }
}

// function App() {
//   return (
//     <div>
//       {/* <Header /> */}
//       {/* <HomePage /> */}
//       <LogIn />
//     </div>
//   );
// }

export default App;
