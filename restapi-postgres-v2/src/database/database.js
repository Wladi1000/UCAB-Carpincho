import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('postgresql://postgres:admin@localhost:5432/UCAB-Carpincho',
{
  define: {
        freezeTableName: true
   } 
});

