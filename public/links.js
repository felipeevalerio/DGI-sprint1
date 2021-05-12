const currentPage = location.pathname;
const links = document.querySelectorAll("nav ul a")
for(let link of links){
    if(currentPage.includes(link.getAttribute('href')) ){
        link.classList.add("actived")
    }
}   

const roles = document.querySelectorAll(".profile-role button");
for(let role of roles){
    role.addEventListener("click",()=> {
        
        if(role.classList.contains("actived"))
            role.classList.remove("actived");
        else
            role.classList.add("actived");
            
    })
}