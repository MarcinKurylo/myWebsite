function throttle (callback, limit) {
    let wait = false                  // Initially, we're not waiting
    return function () {               // We return a throttled function
        if (!wait) {                   // If we're not waiting
            callback.call()          // Execute users function
            wait = true              // Prevent future invocations
            setTimeout(function () {   // After a period of time
                wait = false         // And allow future invocations
            }, limit)
        }
    }
}
    window.onload = checkRelativeHeight
    window.addEventListener("resize", checkRelativeHeight)
    document.querySelector("main").addEventListener("scroll", throttle(checkRelativeHeight,100))
    function checkRelativeHeight(){
        const sections = document.querySelectorAll("section")
        const windowHeight = window.innerHeight
        let isBigSize = window.innerHeight > 600 && window.innerWidth > 600 ? true : false
        sections.forEach(section => {
            const relativeHeight = section.getBoundingClientRect().top / windowHeight
            if(relativeHeight >= -1 && relativeHeight <= 0.01 && isBigSize){
                document.querySelector(`#${section.id}Nav svg`).style.fill = "#fca311"
            } else {
                document.querySelector(`#${section.id}Nav svg`).style.fill = "#e5e5e5"
            }
        });
    }