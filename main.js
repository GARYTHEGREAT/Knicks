let myName = prompt ("What's your name?")
console.log (myName)
let mySex = confirm ("Are you a male?")
let myHeight = prompt ("What's your Height?")
console.log (myHeight)
let myCity = prompt ("What is your city of birth?")
console.log (myCity)
let myPartner = prompt ("What's your partner's  name?")
console.log (myPartner)
let myReligion = prompt ("What's your religion?")
let myRace = prompt ("What's your Race?")
console.log (myRace)




if (mySex) {
 
    console.log ("Hello my name is" + " "+ myName + ".  I am a male and I am " + myHeight + ' tall.'+ "  I was born in " +  myCity + "." + " " + "My partner's name is" +" " + myPartner + "." + " " + " I am a practicing" + " " + myReligion +"."); 
    alert ("Hello my name is" + " "+ myName + "." + " " + "I am a male and I am " + myHeight + ' tall.'+ "  I was born in " +  myCity + "." + " " + "My partner's name is" +" " + myPartner +"." + " " + " I am a practicing" + " "+ myReligion +"."); 
} else {console.log("Hello my name is " + myName + ".  I am a female and I am " + myHeight + " tall."  + "  I was born in " +  myCity + "." + " " + "My partner's name is" +" " + myPartner +"." + " " + " I am a practicing" + " " + myReligion +".");
alert ("Hello my name is " + myName + "." + " " + "I am a female and I am " + myHeight + " tall."  + "  I was born in " +  myCity + "." + " " 
+ "My partner's name is" + " " + myPartner +"." + " " + " I am a practicing" + " "+ myReligion +".");
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

let elPartner = document.getElementById('partner')
elPartner.innerHTML = myPartner;
console.log(elPartner);
let elReligion = document.getElementById('religion')
elReligion.innerHTML = myReligion;
console.log(elReligion);


let elRace = document.getElementById('race')
elRace.innerHTML = myRace;
console.log(elRace);


   
