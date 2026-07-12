const bcrypt = require("bcrypt");
const { UserModel } = require("../model/UserModel");

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if all fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Please fill all the fields.",
            });
        }

        // Check if email already exists
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists.",
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        return res.status(201).json({
            message: "User registered successfully.",
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        console.log("Email received:", email);
        console.log("Password received:", password);

        // Find user
        const user = await UserModel.findOne({ email });
        console.log("User found:", user);

        if (!user) {
            return res.status(404).json({
                message: "User not found."
            });
        }



        // Check if all fields are provided
        // if (!email || !password) {
        //     return res.status(400).json({
        //         message: "Please fill all the fields."
        //     });
        // }

        

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password matched:", isMatch);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials."
            });
        }

        // Generate JWT token
        const token = jwt.sign(
        {
            userId: user._id,
            email: user.email,
            name: user.name,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d",
        }
        );

        return res.status(200).json({
            message: "Login successful.",
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });

    }
};

module.exports = {
    registerUser,
    loginUser,
};