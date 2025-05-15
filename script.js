let boox = document.querySelectorAll(".boox");
let msg = document.querySelector(".Msg");
let rstBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newGame");
let winnerTxt = document.querySelector(".Winner");
msg.classList.add("msgHide");
let player = "one" ;
let count = 0;
let winner = [[0,1,2],
              [3,4,5],
              [6,7,8],
              [0,3,6],
              [1,4,7],
              [2,5,8],
              [0,4,8],
              [2,4,6]]
let  resetGm =()=>{    
boox.forEach((box) => {
    box.innerText ="";
    box.disabled = false ;
});
 msg.classList.remove("msgShow")
 msg.classList.add("msgHide")
 count =0;
} 
let  newGame =()=>{    
boox.forEach((box) => {
    box.innerText ="";
    box.disabled = false; 
    count =0;
});
 msg.classList.remove("msgShow")
 msg.classList.add("msgHide")
} 
 let tieGame =()=>{
      msg.classList.remove("msgHide");
    msg.classList.add("msgShow");
    winnerTxt.innerText = `This game is Tie and There is no Winner`; 
    disableBoxes();
 }

boox.forEach((box)=> {
    box.addEventListener("click",()=>{
        count++;
        if (player === "one") {
            box.innerText = "O";
            player = "two";
            box.disabled = true ;
        }
        else{
            box.innerText = "X";
            player = "one";
            box.disabled = true ;
        }
        
        
         if (count > 8) {
            
            tieGame();
         }
        checkWinner();
    });    
});
let checkWinner = ()=>{
// for (const element of winner) {
//     console.log(element[0],element[1],element[2]);
//     console.log(boox[element[0]].innerText,boox[element[1]].innerText,boox[element[2]].innerText);// }
for (let i = 0; i < winner.length; i++) {
    console.log(boox[winner[i][0]].innerText, boox[winner[i][1]].innerText, boox[winner[i][2]].innerText); 
if (  boox[winner[i][0]].innerText != "" && (boox[winner[i][0]].innerText ===  boox[winner[i][1]].innerText) &&(boox[winner[i][1]].innerText===boox[winner[i][2]].innerText) )
     {
      winnerMsg( boox[winner[i][0]]);
}  
}}
let disableBoxes =()=>{
    for (const box of boox) {
        box.disabled = true;
    }
}
let winnerMsg = (a) => {
    msg.classList.remove("msgHide");
    msg.classList.add("msgShow");
    winnerTxt.innerText = `Congratulation the Winner is : ${ a.innerText}`; 
    disableBoxes();
}
rstBtn.addEventListener("click",resetGm);
newBtn.addEventListener("click",newGame);