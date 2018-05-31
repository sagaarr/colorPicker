var numSquares = 6;
var fixColor = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");// used For changing the background Color when Selected [The background Color of H1 tag ] 
var squares = document.querySelectorAll(".square");
var display = document.querySelector("#display");
// function selectRandomColor() Value is transfered here 
var selectedColor = selectRandomColor();
var messageDisplay = document.querySelector("#message");// message "try again" and "Correct" 
display.textContent = selectedColor;//Span tag in h1 RGB color which color to find 
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");


for(var i = 0; i<modeButton.length; i++){
	modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		//Turnery operator
		//this.textContent ==="Easy" ? numSquares = 3: numSquares = 6; 


		// regular style to write a code 
		 if(this.textContent === "Easy"){
		 	numSquares = 3;
		 }else{
		 	numSquares = 6;
		 }
		reset();

	});
}

function reset(){
	resetButton.textContent = "New Color";
	// generate new random Color
	fixColor = generateRandomColors(numSquares);
	messageDisplay.textContent = " ";
	//chnage the value of rgb showed in h1 tag 
	// jar HEE LIne nae takli tr Color Display honar nae 
	/* The reason why it dosent work is when we click on 
	reset the inecialization of code is done from this click event */ 
	selectedColor = selectRandomColor();
	//Ethe Color DIsplay Hoto
	display.textContent = selectedColor;
	//change Color of Squares 
	for(var i = 0; i<squares.length; i++){
		h1.style.backgroundColor = "steelblue";
		if(fixColor[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = fixColor[i];

		}else{
			squares[i].style.display = "none";
		}
}
}

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	this.classList.add("selected");
// 	numSquares = 3;
// 	fixColor = generateRandomColors(numSquares);
// 	selectedColor = selectRandomColor();
// 	display.textContent = selectedColor; // it is used to show the selected color from n array 
// 	for(var i = 0; i<squares.length; i++){
// 		if(fixColor[i]){
// 			squares[i].style.backgroundColor = fixColor[i];
// 		}else{
// 			squares[i].style.display = "none"; 
// 		}
// 	}


// })

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6
// 	fixColor = generateRandomColors(numSquares);
// 	selectedColor = selectRandomColor();
// 	display.textContent = selectedColor; // it is used to show the selected color from n array 
// 	for(var i = 0; i<squares.length; i++){
// 			squares[i].style.backgroundColor = fixColor[i];
// 			squares[i].style.display = "block"; 
		
// 	}
// })



resetButton.addEventListener("click", function(){

	reset();
	// this.textContent = "New Color";
	// generate new random Color
	// fixColor = generateRandomColors(numSquares);
	// messageDisplay.textContent = " ";
	//chnage the value of rgb showed in h1 tag 
	// jar HEE LIne nae takli tr Color Display honar nae 
	/* The reason why it dosent work is when we click on 
	reset the inecialization of code is done from this click event */ 
	// selectedColor = selectRandomColor();
	//Ethe Color DIsplay Hoto
	// display.textContent = selectedColor;
	//change Color of Squares 
	// for(var i = 0; i<squares.length; i++){
	// 	squares[i].style.backgroundColor = fixColor[i];
	// 	h1.style.backgroundColor = "steelblue";
	// }
})


for(var i = 0; i<squares.length; i++){
	squares[i].style.backgroundColor = fixColor[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === selectedColor){
			messageDisplay.textContent = "Correct!!";
			resetButton.textContent = "Play Again?";
			correctColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!!";
		}
	});

}

function correctColor(color){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
//selectRandomColor is used to select a random color from a array here 
// it ranges from 0 to 5
function selectRandomColor(){
	//here Math.floor is used to make a number complete (1,2,5,4,etc) and Math.random()
	//is used to produce a random number between 0 and 1
	//here we multiplied that random number with length of colors that we have ie; 5.....
	var random = Math.floor(Math.random() * fixColor.length);
	// here we returned the random selected color value to selectedColor we select a value in array like arr[1] like that 
	// similarly here value is returned  
	return fixColor[random];
}
//generateRandomColors used to Generate random colors from infinite range 
function generateRandomColors(num){
	// It is use to generate colors for Squares  
	// create a empty array
	var arr = [];
	// add num random colors to array
	for(var i = 0; i<num; i++){
		arr.push(generator());

	}
	return arr;
}

function generator(){
	//we have to generate a random color by selecting a value between
	// r g and b
	// "red" from 0-255
	var r = Math.floor(Math.random()* 256);
	// "green" from 0-255
	var g = Math.floor(Math.random()* 256);
	// "blue" from 0-255
	var b = Math.floor(Math.random()* 256);
	return "rgb("+r+", "+g+ ", " + b+")";

}


