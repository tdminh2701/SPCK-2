
function ReturnToHome(){
    location.replace("index.html")
}
const hello = document.getElementById("hello")
hello.innerHTML =   localStorage.getItem("Username") 

function gotoEp1(){
    location.replace("Extrapages/Epage1/Epage1.html")
}