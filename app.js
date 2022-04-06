const game = () => {
    
    let pScore = 0;
    let cScore = 0;
    let playButton;
    let introScreen;
    let matchScreen;
    let playerHand;
    let computerHand;

    //Start Game
    const startGame = () => {
         playButton = document.querySelector(".intro button");
         introScreen = document.querySelector(".intro");
         matchScreen = document.querySelector(".match");

       

        playButton.addEventListener("click", () => {
            console.log("start Game 0");
            introScreen.classList.add("fadeOut");
            matchScreen.classList.add("fadeIn");
        });
    };

    //play Match
    const playMatch = () => {
        const options1 = document.querySelectorAll(".options button");
         playerHand = document.querySelector(".playerHand");
         computerHand = document.querySelector(".computerHand");
        const hands = document.querySelectorAll(".hands img");

        

        const optionsArray = ["rock", "paper", "scissors"];

        

        options1.forEach((option) => {
            
            hands.forEach((hand) => {
                console.log("Annimation end outside");
                hand.addEventListener(
                    'animationend', function () {
                        console.log("Annimation end");
                        this.style.animation = '';
                       
                    });
            })
           
            option.addEventListener('click', function(){
                console.log(this.textContent);
                console.log("play Match 2");
                const computerOption = Math.floor(Math.random() * 3);
                console.log(computerOption);
        
                const computerChoice = optionsArray[computerOption];
                console.log(computerChoice); 
                const playerChoice = this.textContent;

                setTimeout(() => {
                    compareHands(playerChoice, computerChoice);

                playerHand.src = `./assets/${playerChoice}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                } ,2000

                )

                
            
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease ";

               
                
            })

            
          
 
        });


    }

    const reset = async() => {
        console.log("reset outside");
        if (cScore ===2 || pScore === 2) {
            console.log("reset Inside");

            var response;
            
           if(cScore ===2)
            response=await confirm("Computer Wins! Reset your game");
            else
            response= await confirm("Player Wins! Reset your game");

            


            cScore = 0;
            pScore = 0;
            updateScore();
            playerHand.src = `./assets/rock.png`;
            computerHand.src = `./assets/rock.png`;
    
            console.log("reset Inside",response);     
            if (response) {
                console.log("response Inside",response);  
              console.log("start Game 0");
              introScreen.classList.add("fadeIn");
              matchScreen.classList.add("fadeOut");
          };

        }
    }

    const updateScore = () => {
        const playerScore = document.querySelector(".playerScore p");
        const computerScore = document.querySelector(".computerScore p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = async(playerChoice, computerChoice) => {
        
        const winnerBlock = document.querySelector(".winner");

        if (playerChoice === computerChoice) {
            winnerBlock.textContent = `It's a tie`;
        } else if (playerChoice === "rock") {
            if (computerChoice === "scissors")
            {
                winnerBlock.textContent = `Player Wins`;
                pScore++;
            }

            else
            {
                winnerBlock.textContent = `Computer Wins`;
                cScore++;
            }
        } else if (playerChoice === "paper") {
            if (computerChoice === "scissors")
            {
                winnerBlock.textContent = `Computer Wins`;
                cScore++;
            }
            else
            {
                winnerBlock.textContent = `Player Wins`;
                pScore++;
            }
        } else if (playerChoice === "scissors") {
            if (computerChoice === "rock")
            {
                winnerBlock.textContent = `Computer Wins`;
                cScore++;
            }
            else
            {
                winnerBlock.textContent = `Player Wins`;
                pScore++;
            }
        }

        await updateScore();
       // reset();
        
    }

    //call inner functions
    startGame();
    //reset();
    playMatch();
 


}

//call main function
game();