import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Survey from './pages/Survey'
import Header from './conponents/Header'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/survey/:questionNumber">
        <Survey />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
