import { Router } from 'express';
import userService from '../service/user.service.js';

const userRouter = Router()

userRouter.post('/', (req, res) => {
    res.json(userService.createUser('test'))
})

userRouter.get('/', (req, res) => {
    res.json(userService.findAll())
})

userRouter.delete('/:id', (req, res) => {
    res.json(userService.deleteUserById(req.params.id))
})

userRouter.get('/error', (req, res) => {
    userService.error()
})

export default userRouter