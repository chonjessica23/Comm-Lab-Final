function changeFont() {
	document.getElementById("body").style.fontFamily = "'Indie Flower', cursive";	
	setTimeout(reverseChangeFont, 34000);
	document.getElementById("hidethis1").style.visibility = "visible";	
}

		function reverseChangeFont() {
			document.getElementById("body").style.fontFamily = "Times New Roman";
			setTimeout(degradeChangeFont, 24000);
		}

function deleteHead() {
    document.getElementById("top").style.visibility = "hidden"; 
    // document.getElementById("christmas").style.visibility = "visible"; 
    setTimeout(reverseDeleteHead, 15000);
	document.getElementById("hidethis2").style.visibility = "visible";	

}
		function reverseDeleteHead() {
			document.getElementById("top").style.visibility = "";
		}

function changeFontColor() {
	document.getElementById("body").style.color = "white";
	// document.getElementById("this").style.color = "white";
	setTimeout(reverseFontColor, 26000);
	document.getElementById("hidethis3").style.visibility = "visible";	

}

		function reverseFontColor() {
			document.getElementById("body").style.color = "black";
		}

function changeBackground() {
	document.getElementById("tree").style.visibility = "visible";
	setTimeout(reverseChangeBackground, 23000);
	document.getElementById("this5").style.visibility = "visible";	
}

		function reverseChangeBackground() {
			document.getElementById("tree").style.visibility = "";
			document.body.style.backgroundColor = "#E4E5E2";
		}
	
function changeImage() {
	document.getElementById("computer").src = "css/pics/snowman.png";
	document.getElementById("computer").style.height = "20vw";
	document.getElementById("computer").style.width = "20vw";
	setTimeout(reverseImage, 20000);
	document.getElementById("hidethis4").style.visibility = "visible";	

}
	
		function reverseImage() {
			document.getElementById("computer").src = "css/pics/computer.jpg";
			document.getElementById("computer").style.height = "21vw";
			document.getElementById("computer").style.width = "36vw";
		}

function playAudio() {
	document.getElementById("jingle").play();
	document.getElementById("hidethis6").style.visibility = "visible";	
	setTimeout(stopAudio, 15000);
}

		function stopAudio() {
			document.getElementById("jingle").pause();
			setTimeout(popup, 12000);
		}	

		function popup() {
			var txt;
			if (confirm("Your time to access to this website has run out. Pay $20 to continue?") ==true){
				window.open("https://www.paypal.com/us/home");
			} else {
				window.open("real2.html");
			}
	
		}


// function onclick() {
// 	alert("Click the mouse on the page to produce colorful balls!")
// }

// function moveAgain(){
	
// }