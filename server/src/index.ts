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
const baseDir = process.env.NODE_ENV === 'production'
    ? path.join(__dirname, '..', '..')
    : path.join(__dirname, '..', '..')
const uploadsDir = path.join(baseDir, 'uploads')
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true })

const cvRoutes = require('./routes/cvRoutes').default
const bookingRoutes = require('./routes/bookingRoutes').default

app.use('/api/cv', cvRoutes)
app.use('/api/bookings', bookingRoutes)

// Serve static files from client build
const clientBuildPath = path.join(baseDir, 'client', 'dist')
app.use(express.static(clientBuildPath))

// SPA fallback - serve index.html for all unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'))
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
