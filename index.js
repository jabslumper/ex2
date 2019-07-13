const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('jabslumper!'))
app.get('/about', (req, res) => res.send('เกี่ยวกับ!'))
app.get('/contact', (req, res) => res.send('ติดต่อเรา!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
