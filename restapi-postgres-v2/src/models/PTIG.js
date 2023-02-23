import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { PE_REVISOR_PTIG } from "./PE_REVISOR_PTIG.js";

export const PTIG = sequelize.define("ptig", {
    id_ptig: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},
{
    timestamps: false
});

PTIG.hasOne(PE_REVISOR_PTIG, {
    foreignKey: 'id_ptig',
    sourceKey: 'id_ptig'
});

PE_REVISOR_PTIG.belongsTo(PTIG, {
    foreignKey: 'id_ptig',
    targetId: 'id_ptig'
});