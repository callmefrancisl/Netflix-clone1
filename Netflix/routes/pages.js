const express = require("express");
const loggedIn = require("../controllers/loggedIn");
const logout = require("../controllers/logout");
const router = express.Router();


router.get("/", loggedIn, (req,res) =>{
    if(req.user){
        res.redirect("/homePage");
    } else {
        res.render("index");
    }
})
router.get("/register",loggedIn, (req,res) =>{
    if(req.user){
        res.redirect("/homePage");
    }else{
        res.sendFile("register.html", {root: "./public"});
    }
})
router.get("/login", loggedIn, (req,res) =>{
    if(req.user){
        res.redirect("/homePage");
    }else{
        res.sendFile("login.html", {root: "./public"});
    }
    
})
router.get("/homePage", loggedIn, (req,res) =>{
    if(req.user){
        res.sendFile("homePage.html", {root: "./public"}); 
    }else{
        res.render("index");
    }
})
router.get("/api/user", loggedIn, (req, res) =>{
    if (req.user) {
        res.json({ user: req.user });
    } else {
        res.status(401).json({ error: "Unauthorized" });
    }
});

router.get("/logout", logout)



module.exports = router;