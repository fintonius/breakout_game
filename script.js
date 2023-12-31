const grid = document.querySelector('.grid');
const BLOCK_HEIGHT = 100;
const BLOCK_WIDTH = 20;

const userStart = [230, 10];
let currentPosition = userStart;

//create block
class Block {
    constructor(x, y) {
        this.bottomLeft = [x, y];
        this.bottomRight = [x + BLOCK_WIDTH, y];
        this.topLeft = [x, y + BLOCK_HEIGHT];
        this.topRight = [x + BLOCK_WIDTH, y + BLOCK_HEIGHT];
    }
}

const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),

    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),

    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
];

function addBlocks() {
 
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block);
    }
};

addBlocks();

//add user
const user = document.createElement('div');
user.classList.add('user');
user.style.left = currentPosition[0] + 'px';
user.style.bottom = currentPosition[1] + 'px';
grid.appendChild(user);

//move user 
function moveUser(e) {
    switch(e.key) {
        case 'ArrowLeft':
            currentPosition[0] -= 10;
            user.style.left = currentPosition[0] + 'px';
    }
}
