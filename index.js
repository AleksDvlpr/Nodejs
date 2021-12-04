const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const usersRoutes = require('./routes/users')
const upload = require('./middleware/uploads')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', usersRoutes)

app.get('/', (req, res) => {
  // намеренный вызов обработчика ошибок
  // throw new Error('Something broke!')
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.post('/upload', upload.single('image'), (req, res) => {
  if (typeof req.file === 'undefined') throw new Error('You didn’t upload the file!')
  res.send('File upload!')
});

app.use((err, req, res, next) => {
  res.status(500).send(err.toString())
})

app.listen(3000, () => {
  console.log('Server was started...');
})
