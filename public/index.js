console.log("connect")

let setting    = document.getElementById("setting")
let settingNav = document.getElementById("setting-nav")

// init

settingNav.classList.add("hiden")

// world

setting.addEventListener("click", ()=>{
    console.log("ok")
    settingNav.classList.toggle("hiden")
})
