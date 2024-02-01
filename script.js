let elias = document.querySelectorAll('.elias')
let winner = document.querySelector('.winner')
let restart = document.querySelector('.restart')

let turnO = true;

let winnerPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

elias.forEach((item)=>{
 item.addEventListener('click',()=>{
    if(turnO){
       item.innerHTML = 'O';
       item.style = 'color: #0532f9;';
       turnO = false;
       item.disabled = true
    }else{
        item.innerHTML = 'X';
        item.style = 'color: #f04242;';
        turnO = true;
        item.disabled = true
    }
    winnerPlayer(item)
 })
});

const winnerPlayer = ()=>{
  for(let x of winnerPattern){
    let val1 = elias[x[0]].innerHTML;
    let val2 = elias[x[1]].innerHTML;
    let val3 = elias[x[2]].innerHTML;

    if(val1 != '' & val2 != '' & val3 != ''){
      if(val1 == val2 & val2 == val3){
          setTimeout(() => {
             winner.style = 'display: block'
             winner.innerHTML = `Congratulations! <span>The winner is 👉 ${val1} 🥳</span>`
            stopGame()
         }, 1000);
      }
    }
  }
}

const stopGame = ()=>{
    for(x of elias){
      x.style = 'display: none';
    }
}

restart.addEventListener('click',()=>{
    window.location.reload()
})