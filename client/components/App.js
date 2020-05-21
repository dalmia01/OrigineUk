import React from 'react';
import {Header} from './Header';
import '../assets/app.scss';
import {Home} from './Home';
import {About} from './About';
import {Footer} from './Footer';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

export const App =  props => {
  return (
    <BrowserRouter>
      <Header />
      
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/about'><About /></Route>
        <Route exact path='/content'><div style={{padding:'100px'}}>content</div></Route>
        <Route exact path='/services'><div style={{padding:'100px'}}>services</div></Route>
        <Route exact path='/contact'><div style={{padding:'100px'}}>contact</div></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
