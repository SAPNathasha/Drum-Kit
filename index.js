
    
    for(var i=0; i<7; i++){
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
            var button = this.innerHTML;
            switch (button){
                case "w":
                    var drum1 = new Audio("sounds/tom-deep.wav");
                    drum1.play();
                    break;
                case "a":
                    var drum2 = new Audio("sounds/tom-joke.mp3");
                    drum2.play();
                    break;
                case "s":
                    var drum3 = new Audio("sounds/tom-kick.mp3");
                    drum3.play();
                    break;
                case "d":
                    var drum4 = new Audio("sounds/tom-snare.mp3");
                    drum4.play();
                    break;
                case "j":
                    var drum5 = new Audio("sounds/tom5.wav");
                    drum5.play();
                    break;
                case "k":
                    var drum6 = new Audio("sounds/tom-crash.mp3");
                    drum6.play();
                    break;
                case "l":
                    var drum7 = new Audio("sounds/tom4.wav");
                    drum7.play();
                    break;
                default : console.log(button);
                
            }
        });
    }


    
       
    
     


