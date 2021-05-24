import mongoose from 'mongoose';
import keys from '../config/keys';

export const connectDB = async () => {
  const conn = await mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB connected: ${conn.connection.host}`.cyan);
};
