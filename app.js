import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import { userRouter } from './routes/usuarioRoutes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
//app.use(morgan(combined))


app.use('/usuarios', userRouter)

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    mensaje: 'Error interno del servidor',
    error: err.message
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
