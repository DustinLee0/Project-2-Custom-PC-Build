const app = require('express');
const router= require('express').Router();
const homepageRoutes= require('./homepage');
const loginSignupRoutes= require('./login-signup')
const apiRoutes= require('./api');
const custompcRoutes= require('./custom-pc');
const myAccountRoutes = require('./myAccount');
const cors = require('cors');

const preBuiltRoutes= require('./pre-built');
const { application } = require('express');

app.use(cors());

router.use('/',homepageRoutes);
router.use('/login',loginSignupRoutes);
router.use('/api',apiRoutes);
router.use('/custom-pc', custompcRoutes);
router.use('/pre-built', preBuiltRoutes);
router.use('/myaccount', myAccountRoutes);
module.exports= router