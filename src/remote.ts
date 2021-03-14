import electronD from 'electron'

export let electron : typeof electronD
export let electronRemote : any
export let electronApp : any

if (window.require) {
  electron = window.require('electron')
  electronRemote = electron?.remote
  electronApp = electron?.remote?.app
  console.log(electron.remote.getGlobal('shared'))
}
export const isElectron = () : boolean => {
  return Boolean(window.require)
}
