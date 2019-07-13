const express = require('express')
const app = express()
const port = 3000


app.get('/about', (req, res) => res.send('เกี่ยวกับ!'))
app.get('/contact', (req, res) => res.send('ติดต่อเรา!'))
app.get('/test', (req, res) => {
res.json({message: "test"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
