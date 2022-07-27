import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './routes'

dotenv.config()

const app = express()

const { PORT } = process.env

app.use(express.json())
app.use(cors())
app.use(route)



app.get('/', function (req: Request, res: Response)
{
  return res.status(200).send({msg: ` 🍏 Api Running: ${PORT}`})
 })


app.listen(PORT, () =>
  {
  console.log(` 🍏 Api Running: ${PORT}`)
})

export default app