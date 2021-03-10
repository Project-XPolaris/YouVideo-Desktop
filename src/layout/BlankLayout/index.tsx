import React from 'react'
import StartPage from '../../pages/Start'
import VideoDetailPage from '../../pages/VideoDetail'
import { HomeLayout } from '../HomeLayout'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import BaseLayout from '../BaseLayout'

export interface BlankLayoutPropsType {

}

const BlankLayout = ({}: BlankLayoutPropsType) => {
  return (
    <Router>
      <Switch>
        <Route path="/start" >
          <BaseLayout>
            <StartPage />
          </BaseLayout>
        </Route>
        <Route path="/video/:id" >
          <BaseLayout>
            <VideoDetailPage />
          </BaseLayout>
        </Route>
        <Route path='/home'>
          <BaseLayout>
            <HomeLayout />
          </BaseLayout>
        </Route>
      </Switch>
    </Router>
  )
}

export default BlankLayout
