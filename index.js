import Game from "./scr/game.js";
import View from "./scr/view.js";

const playFild = document.querySelector('.playFild')

const game = new Game
const view = new View(playFild, 320, 640, 20, 10 )

window.game = game
window.view = view




function sowContext() {
    view.renderPlayfiled(game.playfied)
}




sowContext()

console.log(view)