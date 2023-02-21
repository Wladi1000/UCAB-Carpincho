import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const TDGE = sequelize.define("tdge", {
    id_TDGE: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
});