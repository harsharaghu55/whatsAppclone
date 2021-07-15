import './App.css';
import Sidebar from "./sidebar/Sidebar"
import Chat from "./chat/Chat.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useState } from 'react'
import Login from './login/Login.js'
import { useStateValue } from './stateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
    {!user ? (
      <Login />
    ):(<div className="appBody">
        <Router>
          <Sidebar/>
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>)}
    </div>
  );
}

export default App;
