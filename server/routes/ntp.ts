import express from 'express'
const router = express.Router();

import { NtpPostService } from '../services/ntp/ntpPostService'

export = () => {
    router.post('/', async(req: express.Request, res: express.Response) => {
        const ntpPostService = new NtpPostService();

        try {
            ntpPostService.postNtp(req.body.title, req.body.user);
        } catch(err){
            throw new Error(err);
        }
    })

}