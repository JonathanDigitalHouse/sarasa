const router = require("express").Router();

router.get("/register",(req,res)=>{
    res.render("register");
});

router.post("/register",(req,res)=>{
    console.log(req.body);
    res.send("Registrado")
});




module.exports = router;
