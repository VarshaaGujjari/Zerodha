const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {

        // Read Authorization header
        const authHeader = req.headers.authorization;

        // Check if header exists
        if (!authHeader) {
            return res.status(401).json({
                message: "Access denied. No token provided.",
            });
        }

        // Expected format:
        // Bearer eyJhbGc...

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "Invalid token format.",
            });
        }

        // Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log(decoded);

        // Store decoded user in request
        req.user = decoded;

        

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid or expired token.",
        });

    }
};

module.exports = authMiddleware;