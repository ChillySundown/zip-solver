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
Determines if any pair of row and col coordinates are out of bounds
*/

export function out_of_bounds(coords, board_len) {
    function oob(coord, len) {
        return coord < 0 || coord >= len
    }
    return coords.some(oob)
}
