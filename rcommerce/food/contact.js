function validateForm(){
    var x = document.forms["form"]["email"].value;
    var y = document.forms["form"]["name"].value;
    var z = document.forms["form"]["message"].value;
    if(x == ""){
        alert("Fill Out Email");
        return false;
    }
    else if(y == ""){
        alert("Fill Out Name");
        return false;
    }
    else if (z == "") {
        alert("Message must be filled out");
        return false;
      }
    else{
        return true;
    }
}
