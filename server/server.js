const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

const PORT = 5050

const userRoutes = require("./routes/userRoute")

app.use("/users", userRoutes)

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`)
})
