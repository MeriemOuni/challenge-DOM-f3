// Declaration 

let favs = Array.from(document.querySelectorAll(".fav"))

// Favorite
for (let fav of favs) {
    fav.addEventListener("click", function(){
        if (fav.style.color === "black") {
            fav.style.color = "red"
        } else {
            fav.style.color = "black"
        }
    })
}

// next slide
var container = document.querySelector(".container");
var image = ["https://images.unsplash.com/photo-1630541657813-c16abe60f05b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1629649439562-4c682cd0c0d4?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExNHxGem8zenVPSE42d3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1629986243994-e308b7499ac2?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDk2fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1585806413263-77b7992dcd11?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExMXxGem8zenVPSE42d3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"];
var i = 0;
function forward(){
    i++;
    if(i > image.length-1){
        i = 0;
    }
    container.style.backgroundImage = `url(${image[i]})`;
}
function backward(){
    i--;
    if(i < 0){
        i = image.length-1;
    }
    container.style.backgroundImage = `url(${image[i]})`;
}
