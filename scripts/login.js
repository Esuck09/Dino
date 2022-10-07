//only 3 attempts available
var attempt = 3;

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "WenLing" && password == "Ling1017") {
        alert("Login Succesful!!");
        window.location = "index.html";
        return false;
    }
    else{
        attempt --;
        alert ("You have " + attempt + " attempt left");

        //Disable input field after 3 attempts
        if(attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }

}