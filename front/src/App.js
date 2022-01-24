import React from "react"
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Payment from './components/Payment/Payment';
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer";
import cart from './app/stores/cart'
import order from './app/stores/order'
import './app.css'

function App() {

  return (
    <Provider store={cart}>
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
                <Provider store={order}>
                  <Payment />
                </Provider>
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App;
