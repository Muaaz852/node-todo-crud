import express from 'express'
import {todos} from './db.js'
import todoRouter from "./todos_router.js";
import studentsRouter from './students_router.js';
import cors from "cors";
import * as fs from 'fs'

fs.readFileSync('package.json')

const PORT = 3000

// Create an express app
const app = express()

app.use(cors())

app.use(express.json())

// app.get('todos/', (req, res) => {
//     res.send('Hi from todos')
// })

app.use('/todos', todoRouter)
app.use('/students', studentsRouter)

// start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
