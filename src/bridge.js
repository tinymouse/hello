const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('main', {
    info: async () => {
        const version = await ipcRenderer.invoke('get-version')
        return `Version: ${version}`;
    }
})

const { ipcMain } = require('electron')

