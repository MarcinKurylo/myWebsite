const button = document.querySelector(".welcome button")
if (button){
    button.addEventListener("click", (event) =>{
        event.preventDefault()
        location.href = "/home"
    })
}
