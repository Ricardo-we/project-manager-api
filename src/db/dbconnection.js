import { Sequelize } from "sequelize";
import { config } from 'dotenv';
import * as pg from 'pg';

config();

export const sequelize = new Sequelize(process.env.DB_URL);
