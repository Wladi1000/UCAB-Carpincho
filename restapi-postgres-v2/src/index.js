import app from "./app.js";
import { sequelize } from "./database/database.js";

try {
    await sequelize.sync({force: false});
    console.log('La conexion fue establecida de manera exitosa');
    app.listen(3000);
    console.log("Servidor iniciado en el puerto 3000");
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
