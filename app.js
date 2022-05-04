//dependencias
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const productRoutes = require("./routes/products");


//Config
app.set("view engine","ejs");
app.set("views","./views/pages");
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//Routes
app.use("/products",productRoutes);


//server
app.listen(PORT ,()=>{
    console.log("Servidor levantado")
})