import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import  {Administradores} from './Administradores.js';
import { Estudiantes } from "./Estudiantes.js";
import { ProfesionalesExternos } from "./ProfesionalesExternos.js";
import { Profesores } from './Profesores.js';

export const Usuarios = sequelize.define('usuarios', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true
    },
    cedula: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    }
},{
    timestamps:false
});

Usuarios.hasOne(Administradores, {
    foreignKey: 'id_administrador',
    sourceKey: 'id_usuario'
});

Administradores.belongsTo(Usuarios, {
    foreignKey: 'id_administrador',
    targetId: 'id_usuario'
});

Usuarios.hasOne(Profesores, {
    foreignKey: 'id_profesor',
    sourceKey: 'id_usuario'
});

Profesores.belongsTo(Usuarios, {
    foreignKey: 'id_profesor',
    targetId: 'id_usuario'
});

Usuarios.hasOne(Estudiantes, {
    foreignKey: 'id_estudiante',
    sourceKey: 'id_usuario'
});

Estudiantes.belongsTo(Usuarios, {
    foreignKey: 'id_estudiante',
    targetId: 'id_usuario'
});

Usuarios.hasOne(ProfesionalesExternos, {
    foreignKey: 'id_profesionalE',
    sourceKey: 'id_usuario'
});

ProfesionalesExternos.belongsTo(Usuarios, {
    foreignKey: 'id_profesionalE',
    targetId: 'id_usuario'
});


