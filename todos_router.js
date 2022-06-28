import {Router} from "express";
import {todos} from './db.js'
const router = Router()

router.get('', (req, res) => {
    res.json({
        data: todos
    })
})

router.post('', (req, res) => {
    const {taskName, taskDescription, taskDate} = req.body

    console.log(taskName, taskDescription, taskDate)

    console.log(req.body)

    todos.push({
        taskName,
        taskDescription,
        taskDate,
        taskStatus: 'pending',
    })

    res.json({
        message: 'Todo created'
    })
})
export default router
