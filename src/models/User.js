import { sequelize } from "../db/dbconnection.js";
import { DataTypes } from 'sequelize';
import { IdField } from "./generic-model-fields.js";
import { Project } from './Project.js';
import { Task } from './Task.js';

export const User = sequelize.define('user', {
    id: IdField,

    username: {
        type: DataTypes.STRING,
        unique: true,
    },

    password: {
        type: DataTypes.STRING
    }
}, { timestamps: false } )

// TABLE RELATIONS
User.hasMany(Project, {
    foreignKey: 'user_id',
    sourceKey: 'id'
});

Project.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id'
});
