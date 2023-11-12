import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect("mongodb+srv://user:token")


    return mongoose.connection;
}

export default conectaNaDatabase;
