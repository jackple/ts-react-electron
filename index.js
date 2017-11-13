const path = require('path')
const url = require('url')
const { app, BrowserWindow, ipcMain } = require('electron')
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1000, height: 800})

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.webContents.openDevTools()
    installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => {
      console.log(`Added Extension:  ${name}`)
      mainWindow.loadURL("http://localhost:3333")
    })
    .catch((err) => console.log('An error occurred: ', err))
  } else {
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, './index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  app.quit()
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// 控制调试面板
ipcMain.on('toggle-devtool', (event, args) => {
  mainWindow.webContents.toggleDevTools()
})
