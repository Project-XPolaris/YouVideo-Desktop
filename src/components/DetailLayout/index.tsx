import React, { ReactElement } from 'react'
import clsx from 'clsx'
import useStyles from './style'
import { Paper, Typography } from '@material-ui/core'

export interface DetailLayoutPropsType {
  children?:any
  className?:any
  title?:string
  side?:any
}

const DetailLayout = ({ children, className, title, side }: DetailLayoutPropsType): ReactElement => {
  const classes = useStyles()
  return (
    <div className={clsx(className, classes.root)}>
      <Paper className={classes.side}>
        {side}
      </Paper>
      <div className={classes.content}>
        <div className={classes.header}>
          <Typography variant='h3' className={classes.title}>
            {title}
          </Typography>
        </div>
        {children}
      </div>
    </div>
  )
}

export default DetailLayout
