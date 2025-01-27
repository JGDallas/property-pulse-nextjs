import mongoose from 'mongoose';


let connected = false;

const connectDB = async () => {
mongoose.set('strictQuery', true);

  if (connected) {
    console.log('Mongo DB is connected');
    return;
  }

  // Connect to MongoDB
  try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
    } catch (error) {
        console.log('Error connecting to database: ', error); 
    }
};

export default connectDB;
