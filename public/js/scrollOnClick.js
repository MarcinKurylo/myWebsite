const aArray = document.querySelectorAll(".nav-item a")
const sectionsArray = document.querySelectorAll("section")
const buttonsArray = document.querySelectorAll(".carousel-navigation-button")
const slidesArray = document.querySelectorAll(".slide")

for (let i=0;i<aArray.length-1;i++){
    aArray[i].addEventListener("click", (e)=>{
        e.preventDefault()
        sectionsArray[i].scrollIntoView({behavior: "smooth", animated : true})
    })
}
for (let i=0;i<buttonsArray.length;i++){
    buttonsArray[i].addEventListener("click", (e)=>{
        e.preventDefault()
        slidesArray[i].scrollIntoView()
        sectionsArray[2].scrollIntoView()
    })
}
