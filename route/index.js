const express = require('express');
const roouter = express.Router();

//login page
router.get('/',(req, res) => {
    res.render('Welcome');
})
//register page
router.get('/',(req, res) => {
    res.render('register');
})

module.exports = router;