const express = require('express');

const app = express();

app.use(express.static(__dirname + '/static'));

app.listen(9000, () => {
  console.log('app @ 9000');
});
