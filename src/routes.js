import express from 'express';
import { StatusCodes } from 'http-status-codes';

import userservice from 'services/user.services';
const router = express.Router();
const port = 3000;

const STATUS ={
    success: 'OK',
    failure: 'Failed'
};


router.get('/', (req, res) => {
    res.send({ body: 'Hello World!' });
})

router.post('/add', (req, res) => {
    const data =[]
    const {body:user} = req;
    user.service.addUser()
    if (!user.name) {
        res.status(StatusCodes.BAD_REQUEST).send({
            status: STATUS.failure,
            message: 'Invalid request body',
        });
        return;
    }
    data.push(req.body);
    res.status(StatusCodes.CREATED).send({
    status: STATUS.success,
    data,
    });
})


export default router;