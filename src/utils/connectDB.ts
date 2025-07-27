import mongoose from "mongoose"
let uri : string|undefined = process.env.MONGO_URI
async function connectDB() {
    if(mongoose.connections[0].readyState) return
    if(uri) await mongoose.connect(uri)
    else return console.log("database information is incorrect")
    console.log("connected to db");
}
export default connectDB