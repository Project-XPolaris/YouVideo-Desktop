import React, { ReactElement, useEffect } from 'react'
import { Chip, Typography } from '@material-ui/core'
import useStyles from './style'
import useTagsModel from './model'
import { Bookmark } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'

export interface TagsPagePropsType {

}

const TagsPage = ({}: TagsPagePropsType): ReactElement => {
  const classes = useStyles()
  const model = useTagsModel()
  const history = useHistory()
  useEffect(() => {
    model.loadTags()
  }, [])
  return (
    <div>
      <div className={classes.header}>
        <Typography variant='h3' className={classes.title}>
          Tags
        </Typography>
      </div>
      <div className={classes.tagsContainer}>
        {
          model.tags.map((tag) => {
            return (
              <Chip
                label={tag.name}
                key={tag.id}
                className={classes.tag}
                icon={<Bookmark />}
                onClick={() => history.push(`/tag/${tag.id}`)}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default TagsPage
