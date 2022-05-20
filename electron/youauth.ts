import { BrowserWindow, ipcMain } from 'electron'
import URI from 'urijs'
export let youAuthLoginWindow:BrowserWindow | null = null
ipcMain.on('openYouAuthLoginWindow', async (event, url, callbackUrl) => {
  const loginWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    backgroundColor: '#FFFFFF',
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      allowRunningInsecureContent: true
    }
  })
  const loadUrl = URI(url).setQuery('redirect', callbackUrl).toString()
  await loginWindow.loadURL(loadUrl)
  youAuthLoginWindow = loginWindow
  loginWindow.show()
})
