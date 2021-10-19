require('dotenv').config({ path: './config/dev.env' });
require('./config/db');
const express = require('express');
const errorHandler = require('./middleware/error_handler_middleware');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user_route');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/user', userRouter);

app.use(errorHandler);

// Todo: need to handle the error
app.listen(PORT, () => {
    console.log(`Server running ona port:- ${PORT}`);
});
