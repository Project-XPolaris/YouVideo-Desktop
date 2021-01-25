import { createModel } from 'hox/create-model'
import { useState } from 'react'
import { AnyOutput, getTaskList, Task } from '../../api/task'
import { useInterval } from 'ahooks'

const TaskModel = () => {
  const [taskList, setTaskList] = useState<Array<Task<AnyOutput>>>([])
  useInterval(async () => {
    const response = await getTaskList()
    setTaskList(response.result)
  }, 1000)
  return {
    taskList
  }
}
const useTaskModel = createModel(TaskModel)
export default useTaskModel
