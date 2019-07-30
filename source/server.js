const express = require('express');
const cors = require('cors');
const {db, syncAndSeed, models} = require('./db')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

//SCHOOL ROUTES
app.get('/api/schools', async (req,res,next) => {
  const results = await models.Schools.findAll()
  res.send(results)
})
app.get('/api/schools/:id', async (req,res,next) => {
  const result = await models.Schools.findOne(
    {where: {id: req.params.id}}
  )
  res.send(result)
})

//STUDENT ROUTES
app.get('/api/students', async (req,res,next) => {
  const results = await models.Students.findAll()
  res.send(results)
})
app.get('/api/students/:id', async(req, res, next) => {
  const results = await models.Students.findOne(
    {where: {id: req.params.id}}
  )
  res.send(results)
})
app.post('/api/students/', async(req,res,next) => {
  try {
    console.log(req.body)
    const newStudent = await models.Students.findOrCreate(req.body)
    console.log(newStudent)
    res.send(newStudent)
  }
  catch(er) {
    res.send(er)
  }
})


console.log(`Listening on port:${PORT}`)
app.listen(PORT)
