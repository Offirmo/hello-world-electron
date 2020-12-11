const { app, BrowserWindow } = require('electron')

console.log('Hello from electron', process.platform)

function createWindow () {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	})

	win.loadFile('src/index.html')
}

app.whenReady()
	.then(() => console.log('app ready…'))
	.then(createWindow)

app.on('window-all-closed', () => {
	console.log('on: window-all-closed…')

	//if (process.platform !== 'darwin') {
		app.quit()
	//}
})

app.on('activate', () => {
	console.log('on: activate…')
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})
