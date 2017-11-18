import { Component, h } from 'preact'
import { Router } from 'preact-router'

import Home from '../routes/home'
import Profile from '../routes/profile'
import Header from './header'
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component<{},{}> {
  public currentUrl: string

  /** Gets fired when the route changes.
   *  @param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url	The newly routed URL
   */
  public handleRoute = (e: any) => {
    this.currentUrl = e.url
  }

  public render () {
    return (
      <div id='app'>
        <Header />
        <Router onChange={this.handleRoute}>
        <Home path='/' />
          <Profile path='/profile/' user='me' />
          <Profile path='/profile/:user' user='' />
        </Router>
      </div>
    )
  }
}
