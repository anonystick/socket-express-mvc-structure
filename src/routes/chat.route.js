const express = require('express')
const route = express.Router();
const {homepage, message} = require('../controllers/chat.controller')

route.get('/', homepage)
route.get('/api/message', message)

module.exports = route;