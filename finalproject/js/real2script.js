window.onload = function deleteHead() {
				    document.getElementById("top").style.visibility = ""; 
				    setTimeout(reverseDeleteHead, 5000);
				}
				
				function reverseDeleteHead() {
					document.getElementById("top").style.visibility = "hidden";
				    setTimeout(degradeImage, 7000);
				}
				
				function degradeImage() {
					document.getElementById("computer").style.visibility = "hidden";
				    setTimeout(degradeChangeFont, 7000);
				}

				 function degradeChangeFont() {
				 	document.getElementById("body").style.fontFamily = "'Orbitron', sans-serif";
				    setTimeout(degradeFontColor, 7000);
				 }

				function degradeFontColor() {
					document.getElementById("body").style.color = "green";
					setTimeout(degradeBackground, 5000);
				}

				function degradeBackground() {
					document.body.style.backgroundColor = "black";
				    setTimeout(popup, 9000);
				}	

				function popup() {
					alert("Your time to access to this website has run out. Pay $20 to continue?")
					setTimeout(error, 1000);
				}

				var count = 1
				function error() {
					document.getElementById("error").play();
					document.getElementById('error').addEventListener('ended', function(){
					this.currentTime = 0;
					if(count <= 2){
					   this.play();
					}  count++;
					}, false);
				    setTimeout(lastBlack, 10000);
				}

				function lastBlack() {
					document.getElementById("body").style.color = "black";
					setTimeout(lastGreen, 4000);
					setTimeout(popup2, 2000);
				}

				function popup2() {
					alert("Cannot load page. Slow Internet Connection")
				}

				function lastGreen() {
					document.getElementById("body").style.color = "green";
				}

			
