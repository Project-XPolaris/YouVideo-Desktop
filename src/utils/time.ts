export const formatPlayTime = (sec:number) => {
  let hours = Math.floor(sec / 3600)
  let minutes = Math.floor((sec - (hours * 3600)) / 60)
  let seconds = Math.floor(sec - (hours * 3600) - (minutes * 60))
  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}
