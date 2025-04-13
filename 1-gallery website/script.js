let icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("darkmode");
    if( document.body.classList.contains("darkmode")){
        icon.src = "images/sun.svg";
    }
    else{
        icon.src = "images/moon.svg";
    }
}
const family =document.querySelector(".check2");
family.onclick = function(){
    const familyElement = document.querySelector(".photo-gallery");
    familyElement.classList.remove("place");
    familyElement.classList.remove("child");
    familyElement.classList.remove("nature")
}