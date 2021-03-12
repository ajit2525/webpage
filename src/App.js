import React, { Component } from 'react'
import Registeration1 from './components/Registeration1'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { Route, Switch, Redirect } from 'react-router-dom'



export class App extends Component {
  constructor(props) {
    super(props)
        this.state = {
            isLoggedIn: false,
    }
  }
  togglelogin = () => {
    this.setState({isLoggedIn: true})
  }
  render() {
    return (
      <div>
       <Switch>
        <Route exact path = '/' component={Registeration1} />
        <Route exact path = '/login' component={() => <Login isLoggedIn={this.state.isLoggedIn} toggleLogin={this.togglelogin} />} />
        <Route exact path = '/dashboard' component={Dashboard} />
       </Switch>  
      </div>
    )
  }
}

export default App



