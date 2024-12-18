import jwt from 'jsonwebtoken';
export const verifyToken = asyc (req, res, next) => {
    try{
        let token = req.header("Authorization");
        if (!token) {
            return res.status(403).send ("access denied");
        }
        if (token.startsWith("Bearer ")){
            token = token.slice(7, token.length).trimLeft();
        }
        const verified = jwtverify(toke, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err){
        res.status(500).json({ error: err.message})
    }
}