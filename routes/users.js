const express = require('express')

const router = express.Router()

router.get(['/users', '/users/:id'], (req, res) => {
  console.log(req.params.id)
  console.log(req.query)
  res.json({ result: 'success', message: 'User data' })
})

router.post('/users', (req, res) => {
  console.log(req.body)
  res.status(201).json({ result: 'success', message: 'User created' })
})

router.put('/users/:id', (req, res) => {
  res.json({ result: 'success', message: 'User data updated' })
})

router.patch('/users/:id', (req, res) => {
  res.json({ result: 'success', message: 'User data updated' })
})

router.delete('/users/:id', (req, res) => {
  res.json({ result: 'success', message: 'User deleted' })
})

module.exports = router
