const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const { config } = require('./config/config');
const csurf = require('csurf');
const userRouter = require('./router/user.router');
const routerProduct = require('./router/product.router');
const feedbackRouter = require('./router/feedback.router');
const bookingRouter = require('./router/booking.router');
const router = express();
const cookieParser = require('cookie-parser');
const feedback = require('./models/feedback');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(cors());
/** Connect to Mongo */
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('Mongo connected successfully.');
        StartServer();
    })
    .catch((error) => console.log(error));

/** Only Start Server if Mongoose Connects */
const StartServer = () => {
    /** Routes */
    router.use('/', userRouter);
    router.use('/', routerProduct);
    router.use('/', feedbackRouter);
    router.use('/', bookingRouter);

    /** Healthcheck */
    router.get('/ping', (req, res, next) => res.status(200).json({ message: 'pong' }));

    /** Error handling */
    router.use('/*', (req, res, next) => {
        const error = new Error('Not found');
        res.status(404).json({
            message: error.message
        });
    });

    http.createServer(router).listen(config.server.port, () => console.log(`Server is running on port ${config.server.port}`));
};
