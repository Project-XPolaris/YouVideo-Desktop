import React, { useEffect, useState } from 'react'
import { Button, List, Typography } from '@material-ui/core'
import useStyles from './style'
import LibraryItem from '../../../components/LibraryItem'
import { Add } from '@material-ui/icons'
import useHomeLibraryModel from './model'
import PathSelectDialog from '../../../components/PathSelectDialog'
import useTaskModel from '../../../parts/Task/model'
import { useHistory } from 'react-router-dom'

export interface HomeLibraryPagePropsType {

}

const HomeLibraryPage = ({}: HomeLibraryPagePropsType):React.ReactElement => {
  const classes = useStyles()
  const history = useHistory()
  const model = useHomeLibraryModel()
  const taskModel = useTaskModel()
  const [selectPathOpen, setSelectPathOpen] = useState<boolean>(false)
  useEffect(() => {
    model.loadLibrary()
  }, [])
  const getStatus = (libraryId : number) => {
    const task = taskModel.taskList.find(it => it.type === 'ScanLibrary' && it.output.id === libraryId)
    if (task && task.status === 'Running') {
      console.log(task)
      return 'Scanning'
    }
    return undefined
  }
  return (
    <div className={classes.root}>
      <PathSelectDialog
        open={selectPathOpen}
        onCancel={() => setSelectPathOpen(false)}
        onOk={(name, path, privateLibrary) => {
          model.create(name, path, privateLibrary)
          setSelectPathOpen(false)
        }}
      />
      <div className={classes.header}>
        <Typography variant='h3' className={classes.title}>
          Library
        </Typography>
        <Button startIcon={<Add/>} variant={'contained'} className={classes.addButton} onClick={() => setSelectPathOpen(true)}>
          Add library
        </Button>
      </div>
      <div className={classes.content}>
        <List className={classes.list}>
          {
            model.libraryList.map(library => (
              <LibraryItem
                key={library.id}
                name={library.name}
                path={library.path}
                status={getStatus(library.id)}
                onScan={() => model.scan(library.id)}
                onDelete={() => model.remove(library.id)}
                onClick={() => history.push(`/library/${library.id}`)}
              />
            ))
          }
        </List>
      </div>
    </div>
  )
}

export default HomeLibraryPage
