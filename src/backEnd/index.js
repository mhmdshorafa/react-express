const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
const router = require('./router.js');
app.use(express.static('public'));
app.use(router);
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log('Our app is running on http://localhost:' + PORT);
});
