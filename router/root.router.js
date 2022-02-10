import { Router } from 'express';
import NotFound from '../error/notfound.js';

const rootRouter = Router()

rootRouter.get('/', (req, res) => {
    res.send('Hello im root router')
})

rootRouter.get('/error', (req, res) => {
    throw new NotFound('error in rootRouter')
})

export default rootRouter