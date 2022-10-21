export default class Game {
    score = 0;
    lines = 0;
    level = 0;
    playfied = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
    ];
    activePiece = {
        x: 0,
        y: 0,

        get blocks() {

            return this.rotations[this.rotationsIndex]
        },
        blocks: [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ]

    };

    movePieceLeft() {
        this.activePiece.x -= 1

        if (this.hasCollision()) {
            this.activePiece.x += 1;

        }
    };

    movePieceRight() {
        this.activePiece.x += 1

        if (this.hasCollision()) {
            this.activePiece.x -= 1;
        }


    };

    movePieceDown() {
        this.activePiece.y += 1

        if (this.hasCollision()) {
            this.activePiece.y -= 1;
        }
    };

    //  поворот и проверка столкновения фигуры
    rotatePiece() {
        const blocks = this.activePiece.blocks
        const length = blocks.length
        const temp = []

        for (let i = 0; i < length; i++) {
            temp[i] = new Array(length).fill(0)
        }

        for (let i = 0; i < length; i++) {

            for (let y = 0; y < length; y++) {   
                temp[y][i] = blocks[length - 1 - i][y]
            }
        }

        this.activePiece.blocks = temp

        if(this.hasCollision()){
            this.activePiece.blocks = blocks
        }
    }

    // Проверка на столкновения фигуры 
    hasCollision() {
        const { y: pieceY, x: pieceX, blocks } = this.activePiece

        for (let y = 0; y < blocks.length; y++) {

            for (let x = 0; x < blocks[y].length; x++) {

                if (
                    blocks[y][x] && ((this.playfied[pieceY + y] === undefined || this.playfied[pieceY + y][pieceX + x] === undefined))) {

                    return true
                }
            }
        }

        return false
    };

    // Отрисовка фигуры
    lockPiece() {
        const { y: pieceY, x: pieceX, blocks } = this.activePiece

        for (let y = 0; y < blocks.length; y++) {

            for (let x = 0; x < blocks[y].length; x++) {

                if (blocks[y][x]) {
                    this.playfied[pieceY + y][pieceX + x] = blocks[y][x];
                }
            }
        }
    }
}