import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { PE_REVISOR_PTEG } from "./PE_REVISOR_PTEG.js";

export const PTEG = sequelize.define("pteg", {
    id_pteg: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},
{
    timestamps: false
});

PTEG.hasOne(PE_REVISOR_PTEG, {
    foreignKey: 'id_pteg',
    sourceKey: 'id_pteg'
});

PE_REVISOR_PTEG.belongsTo(PTEG, {
    foreignKey: 'id_pteg',
    targetId: 'id_pteg'
});