import { createModel } from 'hox/create-model'
import { useState } from 'react'
import { AnyOutput, getTaskList, Task } from '../../api/task'
import { useInterval } from 'ahooks'

const TaskModel = () => {
  const [taskList, setTaskList] = useState<Array<Task<AnyOutput>>>([])
  const refresh = async () => {
    const response = await getTaskList()
    setTaskList(response.result)
  }

  return {
    taskList,refresh
  }
}
const useTaskModel = createModel(TaskModel)
export default useTaskModel
