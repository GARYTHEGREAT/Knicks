let myName = prompt ("What's your name?")
console.log (myName)
let mySex = confirm ("Are you a male?")
let myHeight = prompt ("What's your Height?")
console.log (myHeight)
let myCity = prompt ("What is your city of birth?")
console.log (myCity)
if (mySex) {
 
    console.log ("Hello my name is" + " "+ myName + ".  I am a male and I am " + myHeight + ' tall.'+ "  I was born in " +  myCity + "." ); 
    alert ("Hello my name is" + " "+ myName + ".  I am a male and I am " + myHeight + ' tall.'+ "  I was born in " +  myCity + "." ); 
} else {console.log("Hello my name is " + myName + ".  I am a female and I am " + myHeight + " tall."  + "  I was born in " +  myCity + ".");
alert ("Hello my name is " + myName + ".     I am a female and I am " + myHeight + " tall."  + "  I was born in " +  myCity + ".");
} 

let elName = document.getElementById('name')
elName.innerHTML = myName;
console.log(elName);
let elMale = document.getElementById('male')
elMale.innerHTML = mySex;
console.log(elMale);

 let elHeight = document.getElementById('height')
 elHeight.innerHTML = myHeight;
console.log(elHeight);
let elCity = document.getElementById('city')
elCity.innerHTML = myCity;
console.log(elCity);


   
