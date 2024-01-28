/*alert ("Hello");*/

/*document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    alert("I got clicked!");
}
*/

/*var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberofDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        alert("I got clicked!");

    });
}
*/

var numberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberofDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    });

}