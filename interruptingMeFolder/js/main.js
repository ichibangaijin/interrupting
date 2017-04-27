setTimeout(interruptMe, 12000);

var counter = 0;
function interruptMe(){
	
	alert("We sincerely apologize for the wait.");
     var reboot = true;
    if(reboot){document.write("Due to sudden and immediate budget cutbacks, we have decided not to load this website on your computer.");
              var b = document.createElement("button");
               b.innerHTML= "reload website";
              
               document.body.appendChild(b)
            
  b.addEventListener("click", function(){alert("click ok to continue with page reload."); location.reload()});
	  
              }
    else{
      setTimeout(interruptMe, 5000);
    }
  
 
		
	
}
