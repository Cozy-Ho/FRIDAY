import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error(" Could't find .env file... ");
}

export default {
  token: process.env.token,
  cvauthURL: process.env.CVAUTH_URL,
  cvauthPort: parseInt(process.env.CVAUTH_PORT),
  cvmanagerURL: process.env.CVMANAGER_URL,
  mongoHostname: process.env.MONGODB_HOSTNAME,
  mongoDBname: process.env.MONGODB_DATABASE,
  mongoPassword: process.env.MONGODB_PASSWORD,
  mongoPort: process.env.MONGODB_PORT,
  mongoUsername: process.env.MONGODB_USERNAME,
  minioUrl: process.env.MINIO_URL,
  minioPort: parseInt(process.env.MINIO_PORT, 10),
  minioAccessKey: process.env.MINIO_ACCESS_KEY,
  minioSecretKey: process.env.MINIO_SECRET_KEY,
  minioBucketName: "clever",
  isProd: Boolean(process.env.NODE_ENV !== "development"),
  logs: {
    level: process.env.LOG_LEVEL || "silly"
  },
  corsOptions: {
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }
};
