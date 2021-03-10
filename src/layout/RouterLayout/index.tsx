import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import HomePage from '../../pages/Home'
import VideoDetailPage from '../../pages/VideoDetail';
const RouterLayout = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/video" >
          <VideoDetailPage />
        </Route>
      </Switch>
    </Router>
  )
}
export default RouterLayout
