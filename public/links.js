const currentPage = location.pathname;
const links = document.querySelectorAll("nav ul a")
for(let link of links){
    if(currentPage.includes(link.getAttribute('href')) ){
        link.classList.add("actived")
    }
}   