const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.renderSignupForm = (req, res) =>{
    res.render("users/signup");
}

module.exports.signup = async(req, res) =>{
    try{
        let {name , email , password} = req.body;

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            email ,
            name,
            password: hashedPassword,
            role: email === "admin@gmail.com" ? "admin" : "user"
        });

        const registeredUser = await newUser.save();
        console.log(registeredUser);

        res.status(201).json({
            message: "User registered successfully"
        });
    }catch(e){
        console.log(e);
        res.status(400).json({
            message: e.message
        });
    }
};

module.exports.renderLoginForm = (req, res) =>{
    res.render("users/login");
}

module.exports.login = async(req, res) =>{
    try {
        const {email,password} = req.body;

        const user = await User.findOne({email});

        if(!user) return res.status(400).json({message:"User not found"});

        const valid = await bcrypt.compare(password,user.password);

        if(!valid) return res.status(400).json({message:"Wrong password"});

        const token = jwt.sign(
        {id:user._id, role:user.role},
        "secretkey",
        {expiresIn:"1d"}
        );

        res.status(200).json({
            message: "Login successful",
            token
        });

    }catch (err) {
        res.status(500).json({
            message: "Server error"
        });
    }
};