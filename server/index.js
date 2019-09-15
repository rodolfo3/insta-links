const express = require('express');


const app = express();

app.use('/', express.static('./client/build/'));


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
