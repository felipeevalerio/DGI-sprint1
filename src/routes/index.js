const express = require('express');
const routes = express.Router();

const ProjectsController = require("../app/controllers/ProjectsController");


routes.get("/",(req,res) => {
    return res.render("index.njk");
})

routes.get("/profile",ProjectsController.profilePage)

routes.get("/discover",ProjectsController.projectsPage)
routes.get("/discover/:id",ProjectsController.project)

module.exports = routes;