import express, {type Request, type Response, type NextFunction} from 'express'
import todoRoutes from "./routes/todo.ts";

const app = express()

app.use(express.json()) // for parsing json requests

app.use(todoRoutes) // registering routers

app.use(o => {
    const res = o.res!
    res.status(500).json({message: 'An error occurred!'})
})

app.listen(3000)