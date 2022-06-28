import {Router} from "express";

const router = Router()

router.get('', (req, res) => {
    res.send('Hi from Students')
})

export default router
