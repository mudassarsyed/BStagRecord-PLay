const {shell} = require('electron')
const os = require('os')

const fileManagerBtn = document.getElementById('open-file-manager')
console.log(fileManagerBtn)
fileManagerBtn.addEventListener('click', (event) => {
  shell.showItemInFolder(os.homedir())
})
