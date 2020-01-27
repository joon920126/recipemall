const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads') //파일 저장 경로
    },
    filename: function(req, file, cb){
        cb(null, moment().format('YYYYMMDDHHmmss') + '_' + file.originalname) //저장되는 파일명
    }
})

const upload = multer({storage:storage}).single('file') //single: 파일 하나 업로드할때

module.exports = upload