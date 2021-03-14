import React from 'react'
import StartPage from '../../pages/Start'
import VideoDetailPage from '../../pages/VideoDetail'
import { HomeLayout } from '../HomeLayout'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import BaseLayout from '../BaseLayout'
import PlayerPage from '../../pages/Player'
import TagPage from '../../pages/Tag'
import LibraryPage from '../../pages/Library'

export interface BlankLayoutPropsType {

}

const BlankLayout = ({}: BlankLayoutPropsType) => {
  return (
    <Router>
      <Switch>
        <Route path="/player" >
          <BaseLayout>
            <PlayerPage />
          </BaseLayout>
        </Route>
        <Route path="/start" >
          <BaseLayout>
            <StartPage />
          </BaseLayout>
        </Route>
        <Route path="/library/:id" >
          <BaseLayout>
            <LibraryPage/>
          </BaseLayout>
        </Route>
        <Route path="/tag/:id" >
          <BaseLayout>
            <TagPage/>
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
