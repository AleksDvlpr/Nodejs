const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    const name = moment().format('DDMMYYYY-HHmmss_SSS')
    cb(null, `${name}_${file.originalname}`)
  },
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    cb(null, true)
  } else {
    cb(new Error('Unsupported file type'))
  }
}

module.exports = multer({ storage, fileFilter })
