import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Criterios_Rev_TIG = sequelize.define('criterios_rev_tig',{
    id_criterios_rev_tig: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{
    timestamps: false
});