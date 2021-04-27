const express = require('express');
const router = express.Router();

const{
    create
} = require('../controllers/category');
const {userSignupValidator} = require('../validator');


router.post('/category/create', create);






module.exports = router; 