let os = require('os');

function calcTime() {
      let time = os.uptime();
      let hours = (time / 3600).toFixed(0);
      time = (time - (hours * 3600));
      let min = (time % 3600).toFixed(0);
      let sec = (time - min * 60).toFixed(0);
      timeAll = hours + 'h ' + min + 'min ' + sec + 'sec ';
      console.log(timeAll);
}

exports.print = calcTime;