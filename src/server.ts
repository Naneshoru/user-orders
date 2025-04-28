import express from "express";
import routes from "./routes/index";

const app = express()

app.use(express.json())

app.use('/api', routes)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`)
})
