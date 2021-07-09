import useTaskModel from './model'
import React, { useEffect } from 'react'
import { useInterval } from 'ahooks'

export const TaskManager = ():React.ReactElement | null => {
  const taskModel = useTaskModel()
  useInterval(async () => {
    taskModel.refresh()
  }, 3000)
  return null
}
