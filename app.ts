import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Hello Worldddd!'))

app.listen(3001, () => console.log('Example app listening on port 3001!'))