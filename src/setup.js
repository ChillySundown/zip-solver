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
