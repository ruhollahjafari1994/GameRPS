
//---> Variable 
let userScore = 0 ;
let compScore = 0 ; 
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissior_div=document.getElementById('s');
const compScore_span = document.getElementById('comp-score');
const userScore_span = document.getElementById('user-score');
const result_p=document.querySelector('.result p')

//  1)  EventListener
eventListener();
 function eventListener() {
    rock_div.addEventListener('click', ()=>{
        game('r')
    })
    paper_div.addEventListener('click', ()=>{
        game('p')
    })
    scissior_div.addEventListener('click', ()=>{
        game('s')
    })
}

//functions
//getting Computer Choice Random Array
function getComputerChoice() {
    const choices =['r','p','s']
    const randomChoice =Math.floor(Math.random() * 3)
  return  choices[randomChoice]
}





//  2)    Compare and Law => get user and computer choice and compare then

function game(userChoice) {
     const computerChoice = getComputerChoice();
     //compare user choice and computer 
      switch (userChoice + computerChoice) {
         case 'rs':
         case 'pr':
         case 'sp':   
          win(userChoice,computerChoice);
             break;
     
          case 'rp':
          case 'ps':
           case 'sr':  
            lose(userChoice , computerChoice);
           break;

             case 'rr':
             case 'pp':
             case 'ss':  
         draw(userChoice , computerChoice);
             break;
             

         default:
             break;
     }
}
//if user win the game 
function win(userChoice , computerChoice) {
    console.log('win');
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML =`
    شما برنده شدید !!!
    شما ${convertToWord(userChoice)} و کامپیوتر ${convertToWord(computerChoice)} انتخاب کردید`
    console.log(userScore);
    //add green border to div
    document.getElementById(userChoice).classList.add('green')
    //remove class after 500
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('green')

    }, 500);
}

//if user lose the game 
function lose(userChoice , computerChoice){
    console.log('lose');
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML =`
    شما باختید   !!!
    شما ${convertToWord(userChoice)} و کامپیوتر ${convertToWord(computerChoice)} انتخاب کردید`
      //add red border to div
      document.getElementById(userChoice).classList.add('red')
      //remove class after 500
      setTimeout(() => {
          document.getElementById(userChoice).classList.remove('red')
  
      }, 500);
}

//if user draw the game 
function draw(userChoice , computerChoice){
    console.log('draw');
    result_p.innerHTML =`
    مساوی شدید!!!
    شما ${convertToWord(userChoice)} و کامپیوتر ${convertToWord(computerChoice)} انتخاب کردید`

      //add gray border to div
      document.getElementById(userChoice).classList.add('gray')
      //remove class after 500
      setTimeout(() => {
          document.getElementById(userChoice).classList.remove('gray')
  
      }, 500);
}



function convertToWord(letter) {
    if (letter=='r') {
        return 'سنگ'
    }
    else if (letter=='p') {
        return 'کاغذ'
    }
    return "قیچی"

}


