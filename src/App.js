import React, {Component} from 'react';
import {Switch,Route,Link,BrowserRouter as Router} from 'react-router-dom';
import './App.scss';
import Register from './Register';
import Login from './Login';
import Forget from './Forget';
import NotFound from './NotFound';


class App extends Component{
   constructor(){
      super()

   }
   render(){
      return(
          <Router>
           <Switch>
              <Route path="/register" component={Register} />
              <Route exact path="/" component={Login} />
              <Route path="/forget" component={Forget}/>
              <Route component={NotFound}/>
           </Switch>
          </Router>

      )

   }



}


export default App;
