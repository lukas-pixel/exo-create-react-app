import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import Survey from './pages/Survey/Survey'
import Header from './conponents/Header'
import Error from './conponents/Error/index'
import Results from './pages/Result/index'
import Freelances from './pages/Freelances/index'
import Footer from './conponents/Footer/index'
import ThemeProvider from './utils/context/index'
import GlobalStyle from './utils/style/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>
        <Route path="/result">
          <Results />
        </Route>
        <Route path="/freelances">
          <Freelances />
        </Route>
        <Route >
          <Error />
        </Route>
      </Switch>
      <Footer />
      <ThemeProvider />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
