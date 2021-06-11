import axios from "axios";
var CronJob = require('cron').CronJob;

var job = new CronJob('* * * * * *', function() {
    axios.get('http://google.de/')
    .then(function (response) {
      // handle success
      console.log(response.data);      
    })
    .catch(function (error) {
      // handle error
      console.log(error);      
    })
}, null, true, 'America/Los_Angeles');
job.start();