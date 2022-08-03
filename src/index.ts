import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './routes'

dotenv.config()

const app = express()

const { PORT } = process.env

app.use(express.json())
app.use(cors({
  origin: [
    'https://blog-deva.herokuapp.com/',
    'https://blog-clone-deva.netlify.app/', 'https://app.netlify.com/']
}))
app.use(route)

// const allowedOrigins = ['http://localhost:3000'];

// const options: cors.CorsOptions = {
//   origin: ['https://blog-clone-deva.netlify.app/', 'https://app.netlify.com/']
// };

app.get('/', function (req: Request, res: Response) {
  return res.status(200).send({ msg: ` 🍏 Api Running` })
})

app.listen(PORT, () => {
  console.log(` 🍏 Api Running`)
})

export default app
