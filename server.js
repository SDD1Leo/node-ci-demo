// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello from CI/CD! this is with CD using render. and docker hub for container '));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
