import { Sequelize } from "sequelize";

const todoSequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS as string,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: parseInt(process.env.DB_PORT || "3306"),
  }
);

export default todoSequelize;
