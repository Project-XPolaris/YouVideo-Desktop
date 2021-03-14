import React, { ReactElement, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router-dom'
import { useQuery } from '../../hooks/query'
import useStyles from './style'
import { useLocalStorageState, useSize } from 'ahooks'
import { ArrowBack, Pause, PlayArrow, VolumeDown, VolumeUp } from '@material-ui/icons'
import { IconButton, Slider, withStyles } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import { formatPlayTime } from '../../utils/time'

export interface PlayerPagePropsType {

}
const PlaySlider = withStyles({
  root: {
    color: red[500],
    '&:hover .MuiSlider-thumb': {
      display: 'block'
    }
  },
  thumb: {
    display: 'none',
    '&:focus, &:hover, &$active': {
      boxShadow: 'none'
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {},
  rail: {
    color: '#777777'
  }
})(Slider)

const PlayerPage = ({}: PlayerPagePropsType): ReactElement => {
  const classes = useStyles()
  const query = useQuery()
  const history = useHistory()
  const ref : any = useRef()
  const size = useSize(ref)
  const [isPlay, setIsPlay] = useState<boolean>(true)
  const [slideValue, setSlideValue] = useState<number>(-1)
  const [playSecond, setPlaySecond] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  const [saveVolume, setSaveVolume] = useLocalStorageState('saveVolume', 0)
  const playerRef : any = useRef()
  const getPlayBarMax = () => {
    if (!playerRef.current) {
      return 0
    }
    console.log(playerRef.current.getDuration())
    return playerRef.current.getDuration()
  }
  const seekTo = (second:number) => {
    playerRef.current.seekTo(second)
  }
  useEffect(() => { console.log(duration) }, [duration])

  return (
    <div className={classes.root} ref={ref}>
      <ReactPlayer
        url={query.get('playurl') ?? ''}
        width={size.width}
        height={(size.height ?? 64) - 64}
        playing={isPlay}
        playIcon={<PlayArrow />}
        ref={playerRef}
        onProgress={(progress) => {
          console.log(progress)
          setPlaySecond(progress.playedSeconds)
        }}
        onReady={() => {
          setDuration(getPlayBarMax)
        }}
        onSeek={() => setSlideValue(-1)}
        volume={(saveVolume ?? 0) / 100}

      />
      <div className={classes.control}>
        <IconButton onClick={() => history.goBack()}>
          <ArrowBack />
        </IconButton>
        <IconButton onClick={() => setIsPlay(!isPlay)}>
          {
            isPlay ? <Pause /> : <PlayArrow />
          }
        </IconButton>
        <div className={classes.playTimeContainer}>
          <div className={classes.playTime}>
            {
              formatPlayTime(playSecond)
            }
          </div>
          /
          <div className={classes.playTime}>
            {
              formatPlayTime(duration)
            }
          </div>
        </div>
        <div className={classes.center}>

        </div>
        <div className={classes.volumeContainer}>
          <VolumeUp className={classes.icon} />
          <Slider
            value={saveVolume}
            max={100}
            min={0}
            className={classes.volumeBar}
            onChange={(e, value:any) => setSaveVolume(value)}
          />
          <VolumeDown className={classes.icon} />
        </div>
      </div>
      <PlaySlider
        className={classes.playbar}
        max={duration}
        min={0}
        value={slideValue !== -1 ? slideValue : playSecond}
        onChangeCommitted={() => seekTo(slideValue)}
        onChange={(e, value:any) => setSlideValue(value)}
      />
    </div>
  )
}

export default PlayerPage
