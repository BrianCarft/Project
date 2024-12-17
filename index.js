import express from "express"
import https from "https"
const app = express()
const port = 3000
app.use(express.static(__dirname))
const server = https.createServer(app);
server.listen(port)
