const express = require('express');
const path = require('path');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const upload = require('./middleware/uploads');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', usersRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/upload', upload.single('image'), (req, res) => {
  if (typeof req.file === 'undefined')
    throw createError(400, 'You didn’t upload the file!');
  res.send('File upload!');
});

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  const code = err.status || 500;
  res.status(code).json({
    status: code,
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log('Server was started...');
});
