import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import app from './app.js';
connectDB();
const PORT = process.env.PORT || 3000;


app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running on PORT ${PORT}`);
});

