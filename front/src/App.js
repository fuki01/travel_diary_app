import React, { Component } from 'react';

import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './component/MainPage/MainPage';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} />
      </Switch>
      </BrowserRouter>
    );
  }
}
export default App;