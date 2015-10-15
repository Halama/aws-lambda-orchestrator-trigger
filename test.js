var handler = require('./index');

var context = {
  done: function(error, message) {
    console.log('done!', error, message);
  }
};

console.log('handler', handler);
handler.handler({}, context);
