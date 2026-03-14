import jwt from 'jsonwebtoken'
import User from '../models/user.js';

const middleWare = async( req , res , next ) => {

    try {
        console.log(`IM AUTHtoken in middleware: ${req.headers.authorization?.split(' ')[1]}`);
        const token = req.headers.authorization?.split(' ')[1];
        if(!token){
            return res.status(401).json({message : 'unauthorized'});
        }
        const decoded = jwt.verify( token , process.env.JWT_SECRET );
        req.user = await User.findById(decoded.id);
        next();
    } catch (error){
       
        console.error('Authentication error:', error);
        res.status(401).json({message : 'Unauthorized1'});
    }
};


export default middleWare;
