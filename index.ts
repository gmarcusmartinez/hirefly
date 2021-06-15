import { connectDB } from './config/connectDB';
import { server } from './routes/socket';
connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Running on port ${PORT}`.yellow));
