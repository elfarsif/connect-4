document.addEventListener('DOMContentLoaded', ()=>{

    const squares =document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#currentPlayer')
    let currentPlayer=1

    for(let i=0;i<squares.length;i++){
        squares[i].onclick=()=>{
            alert('clicked the square'+i)
        }
    }

})