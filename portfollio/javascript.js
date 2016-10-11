function simpleMethod()
   	     {

   	     	var UserName = document.getElementById("usr").value;
   	     	var PassWord = document.getElementById("pass").value;
   	     	if (UserName == "nitesh" && PassWord == "nitesh1") 
   	     	{
   	     		document.write(" !! Login Successfully !!")
   	     	}
   	     	else
   	     	{
   	     		// 1.) alert("Please Entre correct username and password");

   	     		// 2.)  var oLabel = document.getElementById("label");
   	     		//      oLabel.innerText= "Invalid Username or password !!";

   	     	// 3.)    document.getElementById("label").innerText= "Invalid Username or password !!";

   	     	document.getElementById("label").style.display = "block";
            blinkLabel();

            }
   	     
   	     //console.log("Program is Running till here to check this we use the console.log()")
   		//alert("this method call")
         };


         function blinkLabel(){

         $("#label").fadeOut(function(){
            $("#label").fadeIn(blinkLabel());
            });

           };



         function nextAction()
             {
         	//change the background color of all the input field  when click on NEXT Button//
         	//step 1. get all input objects in an array=== getEelemntsByTagName()
         	var allElements = document.getElementsByTagName("input");
         	for (var i = 0; i < allElements.length; i++) {
         	 	allElements[i].style.background = "yellow"
         	 	allElements[i].style.border = "2px solid red"
         	 	//Dynamic event attaching
         	 	allElements[i].onclick = function(){
         	 		alert("dynamic event attached")
         	 	}
        
             }
         };


         function addNewElement(){
         	 var value = document.getElementById("pass").value;
         	 var newElement = document.createElement("h2");
         	 var textNode = document.createTextNode(value);
         	 newElement.appendChild(textNode);
         	 var body = document.getElementById("sapUI");
         	 body.appendChild(newElement);
             $("input").show(); 
			}