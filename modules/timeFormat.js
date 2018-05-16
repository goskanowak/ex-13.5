let os = require('os');

function calcTime() {
      let time = os.uptime();
      let hours = (time / 3600).toFixed(0);
      time = (time - (hours * 3600));
      let minutes = (time / 60).toFixed(0);
      let seconds = (time - minutes * 60).toFixed(0);
      time = hours + 'h ' + minutes + 'min ' + seconds + 'sec ';
      console.log(time);
}

exports.print = calcTime;