const express = require('express')
const upload = require('../fileUpload')
const multer = require('multer')

const router = express.Router()

/**FormData의 경우 req로부터 데이터를 얻을 수 없다
 * upload 핸들러(multer)를 통해서 데이터를 읽을 수 있다
 */
router.post('api/upload', (req,res,next) => {
    upload(req, res, function(err){
        if(err instanceof multer.MulterError){
            return next(err)
        } else if(err) {
            return next(err)
        }
        console.log('원본파일명: '+ req.file.originalname)
        console.log('저장파일명: '+ req.file.filename)
        console.log('크기: '+ req.file.size)

        return res.json({success:1})
    })
})