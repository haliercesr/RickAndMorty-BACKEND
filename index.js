require('dotenv').config()
const PORT= 3001; //javascript se maneja mucho con valores por default, si la variable PORT no esta definida entonces se usara el puerto por default, en este caso "3001"

const {conn}= require('./src/DB_connection.js')  //para la coneccion hay que tener en cuenta que sequelize trabaja de forma asincronica pos eso hay que manejar un async await.
const server=require('./src/index.js') 

server.listen(PORT, async () => {

    await conn.sync({force:true })
    console.log("server raised in port " + PORT)
})