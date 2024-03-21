const { Router } = require('express')
const Todo = require('../models/Todo')
const router = Router()

/*router.get('/todos', async (req, res) => {  try {
    const todos = await Todo.find({}).lean();    
    res.status(200).json(todos);
  } catch (error) {    
    console.error('Error fetching todos:', error);
    res.status(500).json({ message: 'Internal server error' });  }
});*/
router.get('/todos', async (req, res) => {
    const todos = await Todo.find({}).lean()
  
    res.render('index', {
      title: 'Todos list',
      isIndex: true,
      todos
    })
  })
/*router.get('/', async (req, res) => {
  const todos = await Todo.find({})

  res.render('index', {
    title: 'Todos list',
    isIndex: true,
    todos
  })
})*/

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create todo',
    isCreate: true
  })
})

router.post('/create', async (req, res) => {
  const todo = new Todo({
    title: req.body.title
  })

  await todo.save()
  res.redirect('/')
})

router.post('/complete', async (req, res) => {
  const todo = await Todo.findById(req.body.id)

  todo.completed = !!req.body.completed
  await todo.save()

  res.redirect('/')
})

module.exports = router