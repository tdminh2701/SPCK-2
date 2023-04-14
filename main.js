console.log(localStorage.getItem("Username"))
function ReturnToHome(){
    location.replace("index.html")
}
const hello = document.getElementById("hello")
hello.innerHTML =   localStorage.getItem("Username") 