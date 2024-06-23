const express = require('express')
const router = express.Router()
const { todoHomeRoute, todoCreateRoute, todoReadRoute, todoUpdateRoute, todoDeleteRoute } = require('../controllers/todos.controller')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.route('/').get(todoHomeRoute)
router.route('/create').post(jsonParser, todoCreateRoute)
router.route('/read').get(todoReadRoute)
router.route('/update').put(jsonParser, todoUpdateRoute)
router.route('/delete').post(jsonParser, todoDeleteRoute)

module.exports = router