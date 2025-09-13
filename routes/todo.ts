import express from "express"
import {addTodo, getTodo, getTodos, removeTodo, updateTodo} from "../data.ts"; // must be .js, not .ts !

const router = express.Router()

router.post('/todos', (req: express.Request, res: express.Response) => {
    console.log(req.method, req.originalUrl)
    const text = req.body.text
    const addedTodo = addTodo(text)
    res.json({message: 'Todo added!', todo: addedTodo})
})

router.get('/todos', (req: express.Request, res: express.Response) => {
    console.log(req.method, req.originalUrl)
    const todos = getTodos()
    res.json({todos})
})

router.get('/todos/:id', (req: express.Request, res: express.Response) => {
    console.log(req.method, req.originalUrl)
    const todo = getTodo(+req.params.id)
    res.json({todo})
})

router.patch('/todos/:id', (req: express.Request, res: express.Response) => {
    console.log(req.method, req.originalUrl)
    const updatedTodo = updateTodo(+req.params.id, req.body.text)
    res.json({message: 'Todo updated!', todo: updatedTodo})
})

router.delete('/todos/:id', (req: express.Request, res: express.Response) => {
    console.log(req.method, req.originalUrl)
    removeTodo(+req.params.id)
    res.json({message: 'Todo deleted!'})
})

export default router
