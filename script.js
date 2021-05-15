// no arguments
const paintWall = function () {
    console.log("The wall has been painted red.")
};

paintWall();

// single argument
const paintWalls = function (color) {
    console.log("The walls have been painted " + color + ".")
};

paintWalls("green");
paintWalls("purple");
paintWalls(); // Deze geeft als uitkomst undefined op de plek waar de color hoort te staan. 

// multiple arguments
const paintedLivingroom = function (wall, color) {
    console.log("The " + wall + " wall has been painted " + color + ".")
};

paintedLivingroom("north", "purple")