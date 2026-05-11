import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

const FRONTEND = process.env.FRONTEND_URL || 'http://localhost:5173'
app.use(cors({ origin: FRONTEND }))
app.use(express.json())

// Ensure uploads folder exists
const uploadsDir = path.join(__dirname, '..', '..', 'uploads')
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true })

import cvRoutes from './routes/cvRoutes'
import bookingRoutes from './routes/bookingRoutes'

app.use('/api/cv', cvRoutes)
app.use('/api/bookings', bookingRoutes)

// Serve static files from client build
const clientBuildPath = path.join(__dirname, '..', '..', 'client', 'dist')
if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath))
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'))
  })
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
