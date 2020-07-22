const express = require('exress');
const app = express();
const path = require('path');
const PORT = 7375;
const query = require('./database/query.jsx');

app.use(express.json());