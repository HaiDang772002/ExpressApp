const express = require('express')
const myUserModel = require('../models/userModel')
const router = express.Router()
router.get('/', (req, res) => {
    res.render('index', { title: 'Management' })
})
router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' })
})
router.get('/all', (req, res) => {
    myUserModel.find().sort({ createAt: 1 }).then(result => {
        res.render('allUsers', { title: 'AllUsers', users: result })
    })
})
router.post('/create', (req, res) => {
    const user = new myUserModel(req.body)
    user.save().then(() => {
        res.redirect('/users/all')
    })

})
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    myUserModel.findByIdAndDelete(id).then(() => {
        res.json('/users/all')
    })
})
router.get('/detail', (req, res) => {
    res.send('Chức năng chưa được xây dựng. Chúng tôi sẽ sớm phát triển tính năng này')
})
module.exports = router;