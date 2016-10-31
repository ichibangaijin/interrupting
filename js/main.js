setTimeout(interruptMe, 5000);

var counter = 0;
function interruptMe(){
	var interrupt = prompt("We are sorry, our password system is malfunctioning.  Please enter password.");
	alert("That is was the old password.  The new password is " + interrupt);
	
	while(counter < 3){
		interruptMe();
		counter++;
	}
	alert("Computer is now refusing to work with you");
	document.write("Please come back with more money to spend.");
	
}
