//Detect button press
var numberOfBtn = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfBtn; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimated(buttonInnerHTML);

});
}

// Detect keyboard press
document.addEventListener("keydown", function(keyPress){
    makeSound(keyPress.key);
    buttonAnimated(keyPress.key);
    // console.log(keyPress);
});

function makeSound(tone){
    switch (tone) {
        case "w":
            var tom1 = new Audio("sounds/tom1_2.ogg");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/kick-final.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/snare7.ogg");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/kick-final.mp3");
            tom4.play();
            break;

        case "i":
            var snare = new Audio("sounds/crash1_4.ogg");
            snare.play();
            break;

        case "j":
            var snare = new Audio("sounds/ride1.ogg");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/hi_hat.ogg");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/hi_hat_open.ogg");
            kick.play();
        break;


        default: console.log(tone);
    }
}

function buttonAnimated(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}



