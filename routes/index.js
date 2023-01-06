const express=require('express');
const router = express.Router()
console.log('Router loaded');
const generateController=require('../controllers/image');

router.post('/generateimage',generateController.create);

// router.use('/api', require('./api') );

module.exports = router;