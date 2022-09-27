import './App.css';
import Login from './pages/login.jsx';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import Signup from './pages/signup.jsx';
import Profile from './pages/profile.jsx';

function App() {
  return (
    <Router>
      <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Redirect to="/login" />
        </Switch>
      {/* <div className="App">
        <Login></Login>
      </div> */}
    </Router>
  );
}

export default App;
