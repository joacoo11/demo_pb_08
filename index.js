const express = require('express');
const apiRoutes = require('./Router/app.routes')
const loggerMiddleware = require('./middlewares/logger')

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('nav-app'))
app.use(loggerMiddleware);



app.get('/', (req, res) => {
  res.sendFile('./nav-app/index.html')
})


// Routes
app.use('./api', apiRoutes);



const connectedServer = app.listen(PORT, ()=> {
  console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.error('Error: ', error);
})
