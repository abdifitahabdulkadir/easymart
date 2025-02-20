import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = String(process.env.MONGO_URI);

if (!MONGODB_URL) throw new Error("MongoDB URI is not defined");

interface MongoseDbConnectionI {
  connection: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mgConnection: MongoseDbConnectionI;
}

let cache = global.mgConnection;

if (!cache)
  cache = global.mgConnection = {
    connection: null,
    promise: null,
  };

export default async function dbConnect() {
  if (cache?.connection) {
    return cache.connection;
  }

  if (!cache?.promise) {
    cache.promise = mongoose
      .connect(MONGODB_URL, {
        dbName: "easymart",
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  cache.connection = await cache.promise;
  return cache.connection;
}
