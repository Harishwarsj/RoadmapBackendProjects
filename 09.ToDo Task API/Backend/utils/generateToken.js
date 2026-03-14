import jwt from 'jsonwebtoken';
const generateToken = (id) => {
console.log(`IM GENERATETOKEN: ${id}`);
console.log(`IM GENERATETOKENSECRET: ${process.env.JWT_SECRET}`);
    return jwt.sign({ id } , process.env.JWT_SECRET, {
        expiresIn : '1h'
    } );
};
export default generateToken;
