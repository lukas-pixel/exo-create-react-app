import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import Survey from './pages/Survey/Survey'
import Header from './conponents/Header'
import Error from './conponents/Error/index'
import Result from './pages/Result/index'
import Freelances from './pages/Freelances/index'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/freelances">
          <Freelances />
        </Route>
        <Route >
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
