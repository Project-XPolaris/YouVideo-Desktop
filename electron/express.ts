import express from 'express'
import { youAuthLoginWindow } from './youauth'
import { mainWindow } from './main'

export const runExpress = ():void => {
  const app = express()
  const port = 3071
  app.get('/oauth/youauth', (req, res) => {
    const url = new URL('http://localhost:3071' + req.url)
    const code = url.searchParams.get('code')
    const codeauth = url.searchParams.get('codeauth')
    console.log(`code = ${code}`)
    res.send(JSON.stringify({ success: 'true' }))
    if (mainWindow) {
      mainWindow.webContents.send('oauthCallback', code, codeauth)
      if (youAuthLoginWindow) {
        youAuthLoginWindow.close()
      }
    }
  })
  app.listen(port, () => {
    console.log(`auth listening at http://localhost:${port}`)
  })
}
