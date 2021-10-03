import express from 'express'

const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello Worldddd!'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))