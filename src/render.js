const { exec } = require('child_process');

const btnActivate = document.querySelector('#btn-activate');
const btnDectivate = document.querySelector('#btn-deactivate');
const status = document.querySelector('h2');

const statusCheck = () => {
  exec('warp-cli status', (error, stdout, stderr) => {
    if (stdout.includes('Connected')) {
      status.innerText = 'Connected';
    } else if (stdout.includes('Disconnected')) {
      status.innerText = 'Disconnected';
    }
  });
};

btnActivate.addEventListener('click', () => {
  exec('warp-cli connect', (error, stdout, stderr) => {
    console.log(stdout);
    setTimeout(statusCheck, 1000);
  });
});

btnDectivate.addEventListener('click', () => {
  exec('warp-cli disconnect', (error, stdout, stderr) => {
    console.log(stdout);
    statusCheck();
  });
});

statusCheck();
