import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';

export const register = async (req, res) => {
    
    const { name, password, email } = req.body;
    const exists = await User.findOne({ email });

    if (exists) {
        return res.status(400).json({ message: 'User Already Exists' });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashed });
    const token = generateToken(user._id);
    console.log(`Generated Token: ${token}`);
    res.status(201).json({ token });
}

export const login = async (req, res) => {
    console.log('Login request received with body:', req.body);
    const { name, password , email } = req.body;
    console.log(`Attempting login for user: ${name}`);
    const exists = await User.findOne({ name });
    console.log('User found in database:', exists);
    if (!exists) {
        return res.status(400).json({ message: 'User Not Found' });

    }
    console.log('Comparing passwords for user:', name , password);
    const match = await bcrypt.compare(password, exists.password);
    console.log(`Password match result for user ${name}:`, match);
    if (!match) {
        return res.status(400).json({ message: 'Incorrect Username/Password' });
    }
    console.log(`IM LOGINTOKEN: ${generateToken(exists._id)}`);
    res.status(200).json({ token: generateToken(exists._id) });


};

// export { register, login };


