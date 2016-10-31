setTimeout(interruptMe, 5000);

var counter = 0;
function interruptMe(){
	while(counter < 3){
	var interrupt = prompt("We are sorry, our password system is malfunctioning.  Please enter password.");
	alert("That is was the old password.  The new password is " + interrupt);
		
		counter++;
	}
	alert("Computer is now refusing to work with you");
	document.write("Please come back with more money. And put it in my disk drive.");
	
}
