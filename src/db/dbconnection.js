import { Sequelize } from "sequelize";
import { config } from 'dotenv';

config();

export const sequelize = new Sequelize(process.env.DB_URL);
