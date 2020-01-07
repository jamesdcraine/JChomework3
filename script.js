//prompt user to move the slider to select length of their password

agreement = confirm("Adjust the slider to choose your password length.");

if (agreement){
   console.log("they totally want it");
}
else {
    window.location = "https://www.amazon.com/Cybersecurity-Dummies-Joseph-Steinberg/dp/1119560322";

}

//generate random password
function generatePassword(){

    //set password length/complexity
    let complexity = document.getElementById('slider').value;
   
    //possible password values
    let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++)
    {
        password = password + charSet.charAt(Math.floor(Math.random() * Math.floor(charSet.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;
 
    //add password to previously generated passwords section
    document.getElementById("lastPasswords").innerHTML += password + "<br />";
}

//set default length display of 64
document.getElementById("length").innerHTML = "Length: 64";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){

      if (document.getElementById("slider").value > 8 )
        {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
         }
    else{
        document.getElementById("length").innerHTML = "Length: 8";
        }
            
}

//function to copy password to clipboard
function copyPassword(){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password has been copied to clipboard.");

}
