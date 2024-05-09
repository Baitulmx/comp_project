function RectDrawTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "RectDraw";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){
        //check when mouse is pressed and load pixels
		if(mouseIsPressed){
			if(startMouseX  == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
                //Loads the current value of each pixel on the canvas into the pixels array so drawing are not removed in a new mouse pressed
				loadPixels();
			}

			else{
                //Updates the canas with the RGBA values stored in the pixels array using updatePixels and create a line using user mouse positions. Also prevent more than one line being created at a time. 
				updatePixels();
                line(startMouseX, startMouseY, mouseX, startMouseY);
                line(startMouseX, startMouseY, startMouseX, mouseY);
                line(startMouseX, mouseY, mouseX, mouseY);
                line(mouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
