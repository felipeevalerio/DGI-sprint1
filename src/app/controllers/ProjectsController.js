const projects = require("../data/projects.json");

module.exports = {
    profilePage(req,res){
        const filtered = projects.games.slice(0,3)
        return res.render("profile.njk",{projects:filtered})
    },
    projectsPage(req,res){
        return res.render("projects.njk")
    }
}