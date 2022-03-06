const express = require('express'); //import express into routes file
const router = express.Router();
const { check, validationResult } = require('express-validator');

// router.get ('/', function(req,res) {
//     res.send('It works!');
// }); //use router to respond to any requestes to the root URL with an message

router.get ('/', function(req,res) {
    res.render('form', { title: 'Registration form'});
})
router.post ('/', 
    [
    check('name')
        .isLength({ min:1 })
        .withMessage ('Please enter a name'),
    check('email')
        .isLength({ min:1 })
        .withMessage('Please enter an email'),
    ],
    function(req,res) {
    // console.log(req.body);
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        res.send('Thank you for your registration!');
    } else {
        res.render('form', { 
            title: 'Registration form',
            errors: errors.array(),
            data: req.body,
        });
    }
    
});
// router.METHOD(router, function(req,res) {
//     //callback function
// });

module.exports = router;