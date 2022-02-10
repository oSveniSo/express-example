import Error from './error.js'
export default class NotFound extends Error {
    constructor(msg) {
        super(404, msg)
    }
}