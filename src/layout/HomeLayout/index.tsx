import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/Home'
import Nav from '../Nav'
import useStyles from './style'
import useLayoutModel from '../../models/layout'
import HomeLibraryPage from '../../pages/Home/Library'
import HomeVideosPage from '../../pages/Home/Videos'
import SettingPage from '../../pages/Home/Setting'
import TagsPage from '../../pages/Home/Tags'
import { TaskManager } from '../../parts/Task'

export const HomeLayout = () => {
  const classes = useStyles()
  const layoutModel = useLayoutModel()
  if (layoutModel.navIcon !== 'Menu') {
    layoutModel.setNavIcon('Menu')
  }
  return (
    <div className={classes.main}>
      <TaskManager />
      <div className={classes.nav}>
        <Nav />
      </div>
      <div className={classes.content}>
        <Routes>
          <Route path='tags' element={<TagsPage />} />
          <Route path='/setting' element={<SettingPage/>} />
          <Route path='/videos' element={<HomeVideosPage/>} />
          <Route path='/library' element={<HomeLibraryPage/>} />
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </div>
    </div>
  )
}
