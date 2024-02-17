let boxes = document.querySelectorAll('.box');
let reset = document.getElementById('Reset');
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")


let turnO = true; 
const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [1,4,7],
    [0,3,6],
    [2,4,6],
    [2,5,8]
];
 
boxes.forEach((box) => {
    box.addEventListener("click" , () => {
          ;
           if(turnO){
            box.innerHTML = "O";
            turnO = false;
           }
           else{
            box.innerHTML = "X"
            turnO=true;
           }
           box.disabled=true;
           checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerHTML = `Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};
const disableBtn = () => {
     for (let box of boxes){
        box.disabled = true ;
     }
};
const enableBtn = () => {
    for (let box of boxes){
       box.disabled = false  ;
       box.innerHTML = "" ;
    }
};

const resetGame = () => {
    turnO =true ;  
    enableBtn();
    msgContainer .classList.add("hide");
}

const checkWinner = () => {
for(let pattern of winPatterns){
      let pos1Val =    boxes[pattern[0]].innerText ;
      let pos2Val =  boxes[pattern[1]].innerText ;
      let pos3Val =   boxes[pattern[2]].innerText ;
         
      if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if (pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner" , pos1Val);
        
            showWinner(pos1Val);
        }
      }
    } 
} ;  
newGameBtn.addEventListener("click" , resetGame);
reset.addEventListener("click" , resetGame);

