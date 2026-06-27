const config = {
  env: process.env.NODE_ENV || "development",
  debug: process.env.APP_DEBUG === "true",
  port: Number.parseInt(process.env.PORT || "3000", 10),
  getDatabaseConfig: () => ({
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number.parseInt(process.env.DB_PORT || "3306", 10),
  }),
};

export default config;
