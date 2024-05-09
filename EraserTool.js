function EraserTool() {
    this.icon = "assets/freehand.jpg";
    this.name = "eraserTool";

    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;

    this.draw = function() {
        // Check if the mouse is pressed and the tool is currently drawing
        if (mouseIsPressed) {
            if (!drawing) {
                // Start drawing
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                // Start a path for drawing
                erase(255);
                ellipse(mouseX, mouseY, 10);
            } else {
                // Draw a line from the last mouse position to the current position
                erase(255);
                ellipse(mouseX, mouseY, 10);
                noErase();
                startMouseX = mouseX;
                startMouseY = mouseY;
            }
        } else if (drawing) {
            // Stop drawing when the mouse is released
            drawing = false;
        }
    }
}