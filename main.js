canvas = document.getElementById("mars_canvas");

ctx = canvas.getContext("2d");

background_image = "new_mars.jpg";
rover_image = "rover.png";

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

function add() {
    background_image_Tag = new Image();
background_image_Tag.onload = uploadBackground;
background_image_Tag.src = background_image;

rover_image_Tag = new Image();
rover_image_Tag.onload = uploadRover;
rover_image_Tag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_image_Tag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_image_Tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);

    if (key_pressed == '37'){
        left();
        console.log("left");
    }

    if (key_pressed == '38'){
        up();
        console.log("up");
    }

    if (key_pressed == '39'){
        right();
        console.log("right");
    }

    if (key_pressed == '40'){
        down();
        console.log("down");
    }

}

function up(){
if (rover_y >= 0){

    rover_y -= 10;

    console.log("When up arrow is pressed, x = " + rover_x + " | y =" + rover_y);
    uploadBackground();
    uploadRover();


}
}

function down(){
    if (rover_y <= 500){
    
        rover_y += 10;
    
        console.log("When down arrow is pressed, x = " + rover_x + " | y =" + rover_y);
        uploadBackground();
        uploadRover();
    
    
    }
    }

    function left(){
        if (rover_x >= 0){
        
            rover_x -= 10;
        
            console.log("When left arrow is pressed, x = " + rover_x + " | y =" + rover_y);
            uploadBackground();
            uploadRover();
        
        
        }
        }

        function right(){
            if (rover_x <= 700){
            
                rover_x += 10;
            
                console.log("When right arrow is pressed, x = " + rover_x + " | y =" + rover_y);
                uploadBackground();
                uploadRover();
            
            
            }
            }