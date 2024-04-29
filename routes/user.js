const userControllers = require('../controllers/userControllers');
var express = require('express');
const router = express.Router();

router.get('/', userControllers.getUsers);
router.post('/add', userControllers.addUsers);
router.delete('/delete/:id', userControllers.deleteUsers);
router.put('/update/:id', userControllers.updateUsers);

module.exports = router;


