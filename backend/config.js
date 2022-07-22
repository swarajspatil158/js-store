import dotenv from 'dotenv';

dotenv.config();

export default {
  MONGODB_URL: process.env.MONG_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};