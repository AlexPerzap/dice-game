 var diceOneRoll = Math.floor(Math.random() * 6) + 1;
     
     if (diceOneRoll == 1){
     document.querySelector(".img1").setAttribute("src", "dice1.png")
     } else if (diceOneRoll == 2){
     document.querySelector(".img1").setAttribute("src", "dice2.png")
     } else if (diceOneRoll == 3){
     document.querySelector(".img1").setAttribute("src", "dice3.png")
     } else if (diceOneRoll == 4){
     document.querySelector(".img1").setAttribute("src", "dice4.png")
     } else if (diceOneRoll == 5){
     document.querySelector(".img1").setAttribute("src", "dice5.png")
     } else {
     document.querySelector(".img1").setAttribute("src", "dice6.png")
     }

var diceTwoRoll = Math.floor(Math.random() * 6) + 1;

     if (diceTwoRoll == 1){
     document.querySelector(".img2").setAttribute("src", "dice1.png")
     } else if (diceTwoRoll == 2){
     document.querySelector(".img2").setAttribute("src", "dice2.png")
     } else if (diceTwoRoll == 3){
     document.querySelector(".img2").setAttribute("src", "dice3.png")
     } else if (diceTwoRoll == 4){
     document.querySelector(".img2").setAttribute("src", "dice4.png")
     } else if (diceTwoRoll == 5){
     document.querySelector(".img2").setAttribute("src", "dice5.png")
     } else {
     document.querySelector(".img2").setAttribute("src", "dice6.png")
     }

          if (diceOneRoll > diceTwoRoll){
          document.querySelector("h1").innerHTML = ("Player 1 Wins!")
          } else if (diceOneRoll < diceTwoRoll){
          document.querySelector("h1").innerHTML = ("Player 2 Wins!")     
          } else {
          document.querySelector("h1").innerHTML = ("It's a Tie!")   
          }
     
          

