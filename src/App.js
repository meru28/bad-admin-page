import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import ManageCategory from './components/ManageCategory';
import ManageObat from './components/ManageObat';
import ManageUser from './components/ManageUser';
import ManageTransaction from './components/ManageTransaction';
import Cookies from 'universal-cookie';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path ="/" component={Login}/>
          <div>
            <Header navBrand={"Admin RS Kit"}/>
            <Route path ="/home" component={Home}/>
            <Route path ="/managecategory" component={ManageCategory}/>
            <Route path ="/manageobat" component={ManageObat}/>
            <Route path ="/manageuser" component={ManageUser}/>
            <Route path ="/managetransaction" component={ManageTransaction}/>
          </div>
      </div>
    );
  }
}

export default App;
