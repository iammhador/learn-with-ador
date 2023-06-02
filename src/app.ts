import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

//# Cors middleware:
app.use(cors())

//# Body parser middleware:
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running perfectly!')
})

export default app
