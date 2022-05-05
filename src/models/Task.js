import { sequelize } from './../db/dbconnection.js';
import { DataTypes } from 'sequelize';
import { IdField } from './generic-model-fields.js';

export const Task = sequelize.define('task', {
    id: IdField,

    name: {
        type: DataTypes.STRING,
    },

    description: {
        type: DataTypes.STRING(350),
    },

    taskTimeStart: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },

    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

    taskTimeEnd: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})