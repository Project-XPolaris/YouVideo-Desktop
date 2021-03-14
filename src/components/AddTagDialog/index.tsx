import React, { ReactElement, useEffect, useState } from 'react'
import {
  Autocomplete,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core'
import useStyles from './style'
import { useDebounce } from 'ahooks'
import { fetchTags, Tag } from '../../api/tag'
import { Bookmark } from '@material-ui/icons'

export interface AddTagDialogPropsType {
  open?: boolean
  onCancel: () => void
  onOk: (values: string[]) => void
}

const AddTagDialog = ({ onOk, onCancel, open = false }: AddTagDialogPropsType):ReactElement => {
  const classes = useStyles()
  const [input, setInput] = useState<string>()
  const searchKey = useDebounce(input, { wait: 500 })
  const [options, setOptions] = useState<Tag[] | undefined>()
  const [selected, setSelected] = useState<string[]>([])
  const onDialogOk = () => {
    console.log(selected)
    if (selected.length === 0) {
      return
    }
    onOk(selected)
  }
  useEffect(() => {
    (async () => {
      if (searchKey && searchKey?.length < 2) {
        return
      }
      const response = await fetchTags({ search: searchKey, page: 1, pageSize: 20 })
      setOptions(response.result)
    })()
  }, [searchKey])
  return (
    <Dialog open={open} maxWidth={'xs'} fullWidth onClose={onCancel}>
      <DialogTitle>
        Pick up tags
      </DialogTitle>
      <DialogContent className={classes.content}>
        <Autocomplete
          fullWidth
          className={classes.input}
          multiple
          freeSolo
          onInputChange={(e, text, r) => setInput(text)}
          renderInput={(params) => (
            <TextField
              {...params}
              label='videos tag'
              placeholder='Tag'
            />
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip color={'primary'} icon={<Bookmark />} label={option} {...getTagProps({ index })} key={index} />
            ))
          }
          options={options?.map(it => it.name) ?? []}
          defaultValue={[]}
          onChange={(e, v) => setSelected(v)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onDialogOk}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddTagDialog
