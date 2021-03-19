const text = "Marcin Kuryło".toUpperCase()
const titleSpan = document.querySelector(".title")
const typewriter = () => {
    setTimeout(() => {
        titleSpan.textContent += text[i]
        i++
        if (titleSpan.textContent.length < text.length){
            typewriter()
        }
    }, 200)    
}
if (text && titleSpan){
    var i =0
    typewriter()
}