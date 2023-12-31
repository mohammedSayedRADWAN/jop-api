require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connect=require('./db/connect')
const authRoute=require('./routes/auth')
const jopsRoute=require('./routes/jobs')
const authinticationUser=require('./middleware/authentication')
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
// extra packages


// routes
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/jops',authinticationUser,jopsRoute)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await  connect(process.env.MONGO_URL)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
