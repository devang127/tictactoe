let boxes = document.querySelectorAll(".box");
let resbtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO == true){
            box.innerText = "O"
            turnO = false;
            
        } else {
            box.innerText = "X"
            turnO = true;
            box.style.color = "Green"
        }
        box.disabled = true;

        checkWinner();
    })
})

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = 'WINNER'
    msgContainer.classList.remove("hide")
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val === pos2val && pos2val === pos3val ){
                showWinner(pos1val);
            }
        }
    }
};


newGameBtn.addEventListener("click", resetGame);
resbtn.addEventListener("click",resetGame);
