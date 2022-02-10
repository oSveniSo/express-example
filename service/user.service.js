import { v4 } from 'uuid'
import User from '../entity/user.entity.js'
import NotFound from '../error/notfound.js'

class UserService {
    constructor() {
        this.userList = []
    }

    error() {
        throw new NotFound('error in user service')
    }

    deleteUserById(id) {
        const user = this.findUserById(id)
        const index = this.userList.indexOf(user)
        if (index === -1) return false
        this.userList.splice(index, 1)
        return true
    }

    createUser(username) {
        let user = new User(v4(), username)
        this.userList.push(user)
        return user.id
    }

    findAll() {
        return this.userList
    }

    findUserByUsername(username) {
        return this.userList.filter(u => u.username === username)
    }

    findUserById(id) {
        return this.userList.find(u => u.id === id)
    }
}

export default new UserService()