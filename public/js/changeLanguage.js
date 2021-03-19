const languageOptions = document.querySelectorAll("input[type=radio]")
window.onload = () =>{
    hideLanguage(".fr-text")
    hideLanguage(".pl-text")
}
languageOptions.forEach(option => {
    option.addEventListener("click", () => {
        const chosenLanguage = option.id.slice(0,2)
        const toDisplay = `.${chosenLanguage}-text`
        showLanguage(toDisplay)
        switch (toDisplay) {
            case ".en-text":
                hideLanguage(".fr-text")
                hideLanguage(".pl-text")
                break
            case ".fr-text":
                hideLanguage(".en-text")
                hideLanguage(".pl-text")
                break
            case ".pl-text":
                hideLanguage(".fr-text")
                hideLanguage(".en-text")
                break
            default:
                break;
        }
    })
})
function showLanguage(selector) {
    console.log("Show")
    document.querySelectorAll(selector).forEach(txt => {
        txt.style.display = "block"
    })
}
function hideLanguage(selector) {
    console.log("hide")
    document.querySelectorAll(selector).forEach(txt => {
        txt.style.display = "none"
    })
}