const {shell} = require('electron')
const {ipcRenderer} = require('electron')

const exec = require('child_process').exec;

function execute(command, callback) {
    exec(command, (error, stdout, stderr) => { 
        callback(stdout); 
    });
};

// call the function


const runonbs = document.getElementById('run-on-bs')

runonbs.addEventListener('click', (event) => {
  const filepath=document.getElementById('myFile').files[0].path
  var username=document.getElementById('username').value
  var key=document.getElementById('accesskey').value
  var server="--server https://"+username+":"+key+"@hub-cloud.browserstack.com/wd/hub"
  var os=document.getElementById('os').value
  var browser=document.getElementById('browser').value
  var browser_version=document.getElementById('browser_version').value
  var other=document.getElementById('other').value
  var caps="-c \"browserName=\'"+browser+"\' version=\'"+browser_version+"\' platform=\'"+os+"\' "+other+"\""
  var idecmd ="selenium-side-runner " + filepath + " " + server + " " + caps
  //alert(idecmd)
  const reply = ipcRenderer.sendSync('execute', idecmd)
  const message = `Execution: ${reply}` 
  alert(message)
  //alert('server:'+server + '::::::::::::'+'filepath:' +filepath)
})
