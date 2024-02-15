/* eslint-disable no-undef */
db.createUser(
  {
    user: process.env.MONGO_USERNAME,
    pwd: process.env.MONGO_PASSWORD,
    roles: [
      {
        role: "readWrite",
        db: process.env.MONGO_DATABASE
      }
    ]
  }
);
