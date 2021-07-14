const router = require('express'). Router()
const klinikController = require('../controller/klinik')

router.post('/insert', (req, res)=>{
    klinikController.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getall', (req, res)=>{
    klinikController.getAll(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    klinikController.getById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
    klinikController.update(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res) => {
    klinikController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

module.exports =  router