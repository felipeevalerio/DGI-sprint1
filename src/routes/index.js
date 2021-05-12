const express = require('express');
const routes = express.Router();

routes.get("/",(req,res) => {
    return res.render("index.njk");
})

routes.get("/profile",(req,res) => {
    return res.render("profile.njk");
})

module.exports = routes;