import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        cb(null, path.join(__dirname, '..', '..', 'uploads'))
    },
    filename: function (req: any, file: any, cb: any) {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9)
        cb(null, `${unique}-${file.originalname}`)
    }
})

function fileFilter(req: any, file: any, cb: any) {
    const allowed = ['.pdf', '.doc', '.docx']
    const ext = path.extname(file.originalname).toLowerCase()
    if (!allowed.includes(ext)) return cb(new Error('Only PDF or DOC files allowed'))
    cb(null, true)
}

export default multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } })
