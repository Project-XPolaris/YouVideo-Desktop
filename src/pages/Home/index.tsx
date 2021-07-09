import useStyles from './style'
import useHomeModel from './model'
import React, { useEffect } from 'react'
import HorizonVideoCollection from '../../components/HorizonVideoCollection'
import { TaskManager } from '../../parts/Task'

const HomePage = ():React.ReactElement => {
  const classes = useStyles()
  const model = useHomeModel()
  useEffect(() => {
    model.load()
  }, [])
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        YouVideo
      </div>
      <HorizonVideoCollection className={classes.collectionItem} videos={model.newVideoList} />
    </div>
  )
}

export default HomePage
