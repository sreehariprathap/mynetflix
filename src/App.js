import React from "react"
import "./App.css"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"
//! react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const user = 0
  return (
    <div className="app">
      {/* <h1>Lets build netflix</h1> */}

      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  )
}

export default App
