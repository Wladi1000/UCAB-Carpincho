import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const TDGI = sequelize.define("tdgi", {
    id_TDGI: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
});