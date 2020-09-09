import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm"
import Friends from "./components/Friends"
import PrivateRoute from "./components/PrivateRoute"
import FriendAdd from "./components/FriendAdd"
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">

   <nav>
        <div className="link">
            <Link to="/login">Login</Link>
            <Link to="/addfriends">Add Friends</Link>
          
            <Link to="/protected">Friends List</Link>
        </div>
    </nav>
       <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={LoginForm} />
          <Route path="/addfriends" component={FriendAdd} />
          <Route component={LoginForm} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
