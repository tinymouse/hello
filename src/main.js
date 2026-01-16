const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const packageInfo = require('../package.json')

app.on('ready', () => {
    const win = new BrowserWindow({
        width: 800, height: 600,
        webPreferences: {
            preload: path.join(__dirname, "bridge.js")
        }
    })

    win.loadFile(
        path.join(__dirname, "app.html")
    )
})

ipcMain.handle('get-version', () => {
    return packageInfo.version
})

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})


