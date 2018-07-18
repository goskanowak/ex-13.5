let os = require('os');

function calcTime() {
      let time = os.uptime();
      let hours = (time / 3600).toFixed(0);
      let min = (time % 60).toFixed(0);
      let sec = (time % 3600).toFixed(0);
      timeAll = hours + 'h ' + min + 'min ' + sec + 'sec ';
      console.log(timeAll);
}

exports.print = calcTime;