const Name = document.getElementById("Username")
function Submit() {
        if(Name.value === "" ){
            alert("please type your Username in first")
        }
        else{
            localStorage.setItem('Username', Name.value)
            location.replace("../index.html")
        }
    }

