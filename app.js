const express = require('express');
const app = express();
const port = 2000;

const cors = require('cors');

// Middleware
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Listening on port ${port}!`));