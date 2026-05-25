import mongoose from "mongoose";

// הכתובת לחיבור ל-DB הלוקאלי שלנו
const uriLocal = process.env.DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uriLocal);
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};

// ההגדרה שביקשת להמרת _id ל-id
mongoose.set('toJSON', {
  virtuals: true,
  transform: (doc, converted) => {
    delete converted._id;
  }
});

const database = mongoose.connection;
database.on('error', (error) => console.log(error));
database.once('connected', () => console.log('Database Connected Successfully!'));

export default connectDB;