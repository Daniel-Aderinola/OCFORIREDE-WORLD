import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import fs from 'fs'
import path from 'path'
import nodemailer from 'nodemailer'

export async function submitCV(req: Request, res: Response) {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

        const body = req.body
        const file = (req as any).file
        const submissionsPath = path.join(__dirname, '..', '..', 'submissions.json')
        const entry = { id: Date.now(), body, file: file?.filename }
        const prior = fs.existsSync(submissionsPath) ? JSON.parse(fs.readFileSync(submissionsPath, 'utf-8')) : []
        prior.push(entry)
        fs.writeFileSync(submissionsPath, JSON.stringify(prior, null, 2))

        // send a confirmation email (basic)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
        })
        await transporter.sendMail({ from: process.env.EMAIL_USER, to: body.email, subject: 'CV Received', text: 'Thanks — we received your CV.' })

        return res.json({ success: true, message: 'CV received' })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ success: false, message: 'Server error' })
    }
}
