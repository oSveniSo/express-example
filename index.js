import express from 'express';
import rootRouter from './router/root.router.js';
import userRouter from './router/user.router.js';
import Error from './error/error.js';

const app = express()

app.use('/', rootRouter)
app.use('/user', userRouter)

app.use((err, req, res, next) => {
    console.error(err);
    if (err instanceof Error)
        res.status(err.statusCode).send(err.msg)
    else
        res.status(500).send('Internal error')
});

app.listen(8080)
