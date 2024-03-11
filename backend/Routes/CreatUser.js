const express = require('express')
const router = express.Router()
const User = require('../Models/Users')
const { body, validationResult } = require('express-validator');

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "mynameisnmachamindunipunmunasinghe"

router.post("/creatuser",
    body('email').isEmail(),
    body('name').isLength({ min: 4 }),
    body('password', 'Incorrect Password').isLength({ min: 5 }),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password,salt)

        try {
            await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location
            })
            res.json({ success: true });

        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })


router.post('/loginuser', [
    body('email').isEmail(),
    body('password', "incorrect password").isLength({ min: 5 }),]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;
        try {
            const userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Try Logging in with correct credentials" });
            }

            const pwdcopare = await bcrypt.compare(req.body.password,userData.password)
            if (!pwdcopare) {
                return res.status(400).json({ errors: "Try Logging in with correct credentials" });
            }
            

            const data ={
                user:{
                    id: userData.id,
                }
            }
            
            const authToken=jwt.sign(data,jwtSecret)
            return res.json({ success: true,authToken:authToken,data: userData });
        } catch (error) {
            console.log(error)
            return res.json({ success: false });
        }
    });



module.exports = router;
