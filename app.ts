import express from 'express'

const app = express()
const port = 5000

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
})

app.get('/', (req: express.Request, res: express.Response) => 
    res.send('Hello Worldddd!'),
)

app.listen(port, () => console.log(`Example app listening on port ${port}`))