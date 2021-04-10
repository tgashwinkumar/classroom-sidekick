const {BrowserWindow, app} = require('electron')
const path = require('path')
const url = require('url')

// try {
//     require('electron-reloader')(module)
// } catch (_) {}

const windowOptions = {
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true,
        contextIsolation: false, 
    },
}



const createWindow = () => {
    const win = new BrowserWindow({
        ...windowOptions,
        preload: path.join(__dirname, 'preload.js'), 
    })
    win.maximize()
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });
    win.loadURL(startUrl);
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if(process.platform === "darwin"){
        app.quit()
    }
})