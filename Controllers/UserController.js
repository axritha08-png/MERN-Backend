const user = require("../Models/UserModel");

const SignupUser = async (req,res) => {
    try{
        const {name,email,password,confirm} = req.body;
        const newUser = new user({
            name,
            email,
            password,
            confirm
        });

        const savedUser = await newUser.save();
        res
        .status(201)
        .json({ message: "User created successfully", user: savedUser });
    } 
    catch (error) {
        res.status(400).json({ message: "Error creating user", error });
    }
}; 