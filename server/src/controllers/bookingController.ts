import { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import nodemailer from 'nodemailer'

export async function createBooking(req: Request, res: Response) {
    try {
        const body = req.body
        const bookingsPath = path.join(__dirname, '..', '..', 'bookings.json')
        const entry = { id: Date.now(), body }
        const prior = fs.existsSync(bookingsPath) ? JSON.parse(fs.readFileSync(bookingsPath, 'utf-8')) : []
        prior.push(entry)
        fs.writeFileSync(bookingsPath, JSON.stringify(prior, null, 2))

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
        })
        await transporter.sendMail({ from: process.env.EMAIL_USER, to: body.email, subject: 'Booking Confirmed', text: 'Your booking is confirmed. We will send details shortly.' })

        return res.json({ success: true, message: 'Booking confirmed' })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ success: false, message: 'Server error' })
    }
}
