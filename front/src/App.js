import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Payment from './components/Payment/Payment';
import Navbar from './components/Navbar/Navbar'
import './app.css'

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/payment">
              <Payment />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
