const testGame = window.game
const  [showPalyfild ,learConsole] = document.querySelectorAll('.btnsConsol')[0].children
const [left, right, down, show, rotate] = document.querySelectorAll('.btnsDirections')[0].children

learConsole.onclick = function(){
    console.clear()
}

showPalyfild.onclick = function(){
   console.log(game.playfied)
}

left.onclick = function(){
   game.movePieceLeft()
}

right.onclick = function(){
    game.movePieceRight()
}

down.onclick = function(){
    game.movePieceDown()
}

show.onclick = function(){
    game.lockPiece()
    console.log(game.playfied)
}

rotate.onclick = function(){
    game.rotatePiece()
}


