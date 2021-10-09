import express from 'express'
const router = express.Router();

export = () => {

    router.use('/ntp', require('./ntp'))

    return router;
}