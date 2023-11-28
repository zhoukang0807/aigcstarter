import { app, BrowserWindow, Menu, MenuItem, dialog } from'electron';
import {ClassA} from'./a/ClassA';
let mainWindow
let createWindow = function() {
    mainWindow = new BrowserWindow({width:800, height:600, fullscreenable:false,maximizable:false,backgroundColor:'#1E1E1E'})
    mainWindow.webContents.openDevTools()
    mainWindow.loadFile('index.html')
    mainWindow.on('closed', function() {
        mainWindow = null
    })
    new ClassA()
}
app.on('ready', createWindow)
app.on('window-all-closed', ()=>{
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', ()=>{
   if (mainWindow === null) {
        createWindow()
    }
})