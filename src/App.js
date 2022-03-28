// import React from 'react'
import './App.css'
import NavBar from './common/NavBar/NavBar'
import Home from './components/pages/Home'
import About from './components/About/About'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Gallery from './components/gallery/Gallery'


const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' exact component={About}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App