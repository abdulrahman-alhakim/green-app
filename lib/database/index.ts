import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
// cached referring to our cached connection
// here we initialise the cached variables.
let cached = (global as any).mongoose || {conn: null, promise: null}

export const connectToDatabase = async() => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error('MONGODB_URI is messing');

    // here connect to already connection or create a new one 
    cached.promise= cached.promise || mongoose.connect(MONGODB_URI,{
        dbName: 'GreenIdlib',
        bufferCommands: false
    })

    cached.conn = await cached.promise;

    return cached.conn;
}