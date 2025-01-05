import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URL;

if (!MONGODB_URI) {
  console.error("Error: MONGODB_URI environment variable is not defined.");
  throw new Error(
    "Please define the MONGODB_URI environment variable in your .env file."
  );
}

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }
  const opts = {
    bufferCommands: false,
  };
  try {
    await mongoose.connect(MONGODB_URI, opts);
    console.log("Successfully connected to MongoDB");
    return mongoose;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}

export default connectToDatabase;
