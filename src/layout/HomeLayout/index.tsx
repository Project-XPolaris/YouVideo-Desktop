import React from 'react'
import { Route, useRouteMatch, Switch } from 'react-router-dom'
import HomePage from '../../pages/Home'
import Nav from '../Nav'
import useStyles from './style'
import useLayoutModel from '../../models/layout'
import HomeLibraryPage from '../../pages/Home/Library';
import HomeVideosPage from '../../pages/Home/Videos';

export const HomeLayout = () => {
  const classes = useStyles()
  const { path, url } = useRouteMatch()
  const layoutModel = useLayoutModel()
  if (layoutModel.navIcon !== 'Menu') {
    layoutModel.setNavIcon('Menu')
  }
  return (
    <div className={classes.main}>
      <div className={classes.nav}>
        <Nav />
      </div>
      <div className={classes.content}>
        <Switch>
          <Route path={`${path}/videos`}>
            <HomeVideosPage />
          </Route>
          <Route path={`${path}/library`}>
            <HomeLibraryPage />
          </Route>
          <Route path={path}>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
