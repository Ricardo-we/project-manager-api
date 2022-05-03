import { DataTypes } from 'sequelize';
import { sequelize } from './../db/dbconnection.js';
import { IdField } from './generic-model-fields.js';
import { Task } from './Task.js';

export const Project = sequelize.define('projects', {
    id: IdField,

    name: {
        type: DataTypes.STRING,
    },

    description: {
        type: DataTypes.STRING(350),
    },
})

// TABLE RELATIONS
const foreignKey = 'project_id'
const sourceKey = 'id'

Project.hasMany(Task, {
    foreignKey,
    sourceKey,
    onDelete: 'CASCADE',
    hooks: true
});
Task.belongsTo(Project, {
    foreignKey,
    targetKey: sourceKey,
});
