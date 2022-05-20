import React from 'react'
import StartPage from '../../pages/Start'
import VideoDetailPage from '../../pages/VideoDetail'
import { HomeLayout } from '../HomeLayout'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import BaseLayout from '../BaseLayout'
import PlayerPage from '../../pages/Player'
import TagPage from '../../pages/Tag'
import LibraryPage from '../../pages/Library'

export interface BlankLayoutPropsType {

}

const BlankLayout = ({}: BlankLayoutPropsType) => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/player"
          element={
            <BaseLayout>
              <PlayerPage />
            </BaseLayout>
          }
        />
        <Route
          path="/start"
          element={
            <BaseLayout>
              <StartPage />
            </BaseLayout>
          }
        />
        <Route
          path="/library/:id"
          element={
            <BaseLayout>
              <LibraryPage/>
            </BaseLayout>
          }
        />
        <Route
          path="/tag/:id"
          element={
            <BaseLayout>
              <TagPage/>
            </BaseLayout>
          }
        />
        <Route
          path="/video/:id"
          element={
            <BaseLayout>
              <VideoDetailPage />
            </BaseLayout>
          }
        />
        <Route
          path='/home/*'
          element={
            <BaseLayout>
              <HomeLayout />
            </BaseLayout>
          }
        />
        <Route
          path="/"
          element={<Navigate to="/start" replace />}
        />
      </Routes>
    </HashRouter>
  )
}

export default BlankLayout
