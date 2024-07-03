const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello , welcome to my server!');
});

app.get('/about', (req, res) => {
    res.send('This is a simple server created using Express with middleware integration.');
});

 app.use((req, res, next) => {
    res.status(404).send('Error: Page Not Found');
});

const PORT = 3000;
app. listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});

      
