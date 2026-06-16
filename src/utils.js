/*
Dictionary that maps each direction to the row-col translation
in the 2D array
    Right - 0b0001 - row+0, col+1
    Left - 0b0010 - row+0, col-1
    Down - 0b0100 - row+1, col+0
    Up - 0b1000 - row-1, col+0 
*/

export const directions = new Map()
directions.set(1, [0, 1])
directions.set(2, [0, -1])
directions.set(4, [1, 0])
directions.set(8, [-1, 0])

/*
Dictionary that maps each direction to it's opposite
*/
export const OPPOSITES = {};
OPPOSITES[0b0001] = 0b0010;
OPPOSITES[0b0010] = 0b0001;
OPPOSITES[0b0100] = 0b1000;
OPPOSITES[0b1000] = 0b0100;

//I made an edit! Hooray

/*
Determines if any pair of row and col coordinates are out of bounds
*/

export function out_of_bounds(coords, board_len) {
    return coords.some(pos => pos < 0 || pos >= board_len)
}

/*
Determines if 2D-array game board has been filled
*/
export function filled_board(node_arr) {
    const filled_loc = (loc) => loc < 0

    for (const row of node_arr) {
        if(!row.every(filled_loc)) {
            return false
        }
    }
    return true
}

export function make_empty_grid(size, val = 0) {
    return Array(size).fill().map(() => Array(size).fill(val))
}

// export const right = new KeyboardEvent('keydown', {
//     key: 'ArrowRight',
//     bubbles: true
// });

// export const left = new KeyboardEvent('keydown', {
//     key: 'ArrowLeft',
//     bubbles: true
// });

// export const down = new KeyboardEvent('keydown', {
//     key: 'ArrowDown',
//     bubbles: true
// });

// export const up = new KeyboardEvent('keydown', {
//     key: 'ArrowUp',
//     bubbles: true
// });

export const keyStrokes = {
    0b0001: 'ArrowRight', //right,
    0b0010: 'ArrowLeft',//left,
    0b0100: 'ArrowDown', //down,
    0b1000: 'ArrowUp'//up
};