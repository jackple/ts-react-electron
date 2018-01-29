import { remote, ipcRenderer } from 'electron'
const { Menu, MenuItem } = remote

const toggleDevtool = (): void => {
    ipcRenderer.send('toggle-devtool')
}

const menu = new Menu()
// menu.append(new MenuItem({ label: '复制', click() { console.log(window) } }))
// menu.append(new MenuItem({ type: 'separator' }))
// menu.append(new MenuItem({ label: '粘贴', click() { console.log('粘贴') } }))
// menu.append(new MenuItem({ type: 'separator' }))
menu.append(
    new MenuItem({
        label: '检查',
        click() {
            toggleDevtool()
        }
    })
)

window.addEventListener(
    'contextmenu',
    e => {
        e.preventDefault()
        menu.popup(remote.getCurrentWindow())
    },
    false
)

window.addEventListener(
    'keyup',
    e => {
        if (e.keyCode === 123) {
            toggleDevtool()
        }
    },
    false
)
