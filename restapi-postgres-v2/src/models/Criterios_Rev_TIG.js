import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { PE_Contiene_CTIG } from "./PE_Contiene_CTIG.js";

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

Criterios_Rev_TIG.hasOne(PE_Contiene_CTIG, {
    foreignKey: 'id_criterios_rev_tig',
    sourceKey: 'id_criterios_rev_tig'
});

PE_Contiene_CTIG.belongsTo(Criterios_Rev_TIG, {
    foreignKey: 'id_criterios_rev_tig',
    targetId: 'id_criterios_rev_tig'
});