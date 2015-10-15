var https = require('https'),
  KBC_TOKEN = 'STORAGE_API_TOKEN',
  KBC_ORCHESTRATION_ID = 'ORCHESTRATION_ID';

var options = {
  hostname: 'syrup.keboola.com',
  path: '/orchestrator/orchestrations/' + KBC_ORCHESTRATION_ID + '/jobs',
  method: 'POST',
  headers: {
    'X-StorageApi-Token': KBC_TOKEN
  }
};

exports.handler = function (event, context) {
  https.request(options, function (res) {
    if (res.statusCode === 201) {
      context.done(null, 'job created');
    } else {
      context.done('status code: ' + res.statusCode);
    }
  }).on('error', function (err) {
    console.log('Error, with: ' + err.message);
    context.done("Failed");
  }).end();
};
