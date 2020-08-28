const ping = require('ping');

const MAX_PING = 50;
const HOST = 'google.com';
const INTERVAL_TIME = 500;

const cfg = {
  extra: ['-i', '1000'],
};


function pad(value) {
  return value < 10 ? '0' + value : value;
}

function getDisplayableTime(now) {
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  return `${hours}:${minutes}:${seconds}`;
}

function pingHost() {
  ping.promise.probe(HOST)
  .then((res) => {
    const nbMs = parseInt(res.time);
    const displayableTime = getDisplayableTime(new Date());

    if (nbMs > MAX_PING) {
      console.log(`${nbMs}ms @ ${displayableTime}`);
    }
  }, cfg);
}

setInterval(pingHost, INTERVAL_TIME);
