// import mongoose from "mongoose";

// export const connectToMongoDB=async()=>{
//     try {
//         await mongoose.connect(process.env.MONGO);
//         console.log("connected to mongodb")
//     } catch (error) {
//         console.log("error connecting to mongodb:",error);
        
//     }
// }

import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    try {
        const uri = process.env.MONGO; // Ensure this environment variable is set correctly
        if (!uri) {
            throw new Error("MONGO environment variable is not defined");
        }
        
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'dashboard', // Specify your database name here
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        console.error("Stack trace:", error.stack);
        throw error; // Rethrow to handle it where this function is called
    }
};
