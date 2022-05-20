import React, { ReactElement, useEffect } from 'react'
import DetailLayout from '../../components/DetailLayout'
import { useNavigate, useParams } from 'react-router-dom'
import useStyles from '../Tag/style'
import useLibraryDetailModel from './model'
import ActionSide from '../../components/ActionSide'
import { VideoFile } from '../../api/video'
import VideoItem from '../../components/VideoItem'
import { getImageUrl } from '../../utils/image'
import { Pagination } from '@mui/material'

export interface LibraryPagePropsType {

}

const LibraryPage = ({}: LibraryPagePropsType): ReactElement => {
  const { id } = useParams()
  const classes = useStyles()
  const model = useLibraryDetailModel()
  const history = useNavigate()
  useEffect(() => {
    model.setLibraryId(Number(id))
  }, [])
  return (
    <DetailLayout
      title={model.library?.name}
      className={classes.root}
      side={
        <ActionSide>

        </ActionSide>
      }
    >
      <div className={classes.list}>
        {
          model.videoList.map(video => {
            let file: VideoFile | undefined
            if (video.files?.length !== 0) {
              file = video.files[0]
              return (
                <VideoItem
                  key={video.id}
                  className={classes.item}
                  title={video.name}
                  coverUrl={getImageUrl(file?.cover)}
                  onClick={() => history(`/video/${video.id}`)}
                  coverHeight={96}
                />
              )
            }
          })
        }
      </div>
      <Pagination
        count={model.pagination.pageCount}
        page={model.pagination.page}
        onChange={(event, page) => model.loadVideo({ page })}
        className={classes.pagination}
      />
    </DetailLayout>
  )
}

export default LibraryPage
