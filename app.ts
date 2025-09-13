import express from 'express'

const app = express()

app.get('/', (req: express.Request, res: express.Response) => {
    console.log(req.method)
    res.json({message: 'Hello World!'})
})

app.listen(3000)