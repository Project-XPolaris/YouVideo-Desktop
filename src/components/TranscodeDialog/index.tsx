import React, { ReactElement, useState } from 'react'
import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import useStyles from './style'
import { Codec, fetchCodecList, fetchFormatList, Formats } from '../../api/trans'
import { useAutoSearch } from './hook'

export interface TranscodeDialogPropsType {
  open?: boolean
  onCancel: () => void
  onOk: (codec: string, format:string) => void
}

const TranscodeDialog = ({ onOk, onCancel, open = false }: TranscodeDialogPropsType):ReactElement => {
  const classes = useStyles()
  const [codec, setCodec] = useState<string>('')
  const [format, setFormat] = useState<string>('')
  const codecAutoSearch = useAutoSearch<Codec>((searchKey) => {
    return fetchCodecList({ search: searchKey, type: 'video', feat: 'encode' })
  })
  const formatAutoSearch = useAutoSearch<Formats>((searchKey) => {
    return fetchFormatList({ search: searchKey })
  })
  const onDialogOk = () => {
    if (codec.length === 0 || format.length === 0) {
      return
    }
    onOk(codec, format)
  }
  return (
    <Dialog open={open} maxWidth={'xs'} fullWidth onClose={onCancel}>
      <DialogTitle>
        Config transcode
      </DialogTitle>
      <DialogContent className={classes.content}>
        <Autocomplete
          fullWidth
          className={classes.input}
          onInputChange={(e, text, r) => codecAutoSearch.setInput(text)}
          renderInput={(params) => (
            <TextField
              {...params}
              label='output codec'
              placeholder='search codec'
            />
          )}
          options={codecAutoSearch.options.map(it => it.name) ?? []}
          onChange={(e, v:any) => setCodec(v)}
        />
        <Autocomplete
          fullWidth
          className={classes.input}
          onInputChange={(e, text, r) => formatAutoSearch.setInput(text)}
          renderInput={(params) => (
            <TextField
              {...params}
              label='output format'
              placeholder='search format'
            />
          )}
          options={formatAutoSearch.options.map(it => it.name) ?? []}
          onChange={(e, v:any) => setFormat(v)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onDialogOk}>
          Transcode
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default TranscodeDialog
