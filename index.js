const express = require("express")
const app = express()

app.get("/", (request, response) => {
  response.send("It worked for MattC!")
})

app.listen(3000)
