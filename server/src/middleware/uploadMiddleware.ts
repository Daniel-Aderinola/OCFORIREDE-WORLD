import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', '..', 'uploads'))
    },
    filename: function (req, file, cb) {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9)
        cb(null, `${unique}-${file.originalname}`)
    }
})

function fileFilter(req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) {
    const allowed = ['.pdf', '.doc', '.docx']
    const ext = path.extname(file.originalname).toLowerCase()
    if (!allowed.includes(ext)) return cb(new Error('Only PDF or DOC files allowed'))
    cb(null, true)
}

export default multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } })
