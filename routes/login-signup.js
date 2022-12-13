const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', async (req,res)=>{
    try{
        await res.render('LoginSignUp');
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports=router;