import React, { Component } from 'react';

import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './component/MainPage/MainPage';
import CreatePage from './component/CreatePage/CreatePage';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/create' component={CreatePage} />
      </Switch>
      </BrowserRouter>
    );
  }
}
export default App;