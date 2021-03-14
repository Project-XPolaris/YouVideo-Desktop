import apiRequest from '../utils/request'
import { ApplicationConfig } from '../config'
import { ListContainer } from './response'

export interface Video {
  id:number
  base_dir:string
  library_id?:string
  name:string
  files:VideoFile[]
}
export interface VideoFile {
  id: number
  path: string
  cover: string
  duration: number
  size: number
  bitrate: number
  main_video_codec: string
  main_audio_codec: string
  video_id: number
  name: string
}
export const fetchVideoList = (queryParam:any):Promise<ListContainer<Video>> => {
  return apiRequest.get(ApplicationConfig.apiPaths.videoList, {
    params: queryParam
  })
}

export const fetchVideo = (videoId :number):Promise<Video> => {
  return apiRequest.get(ApplicationConfig.apiPaths.video.replace(':id', videoId.toString()))
}
