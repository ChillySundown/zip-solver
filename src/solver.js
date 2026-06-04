import {directions, out_of_bounds, filled_board} from "./setup"

/*
Depth-First Search Algorithm for traversing graph
    - node_arr: 2D-Array of integers symbolizing both numbered nodes and empty/filled nodes
    - border_arr: 2D-Array of 4-bit ints symbolizing borders of node
    - path: List that contains current path that gets updated with each recursive call
    - cur_int: Last visited numbered node
    - last_loc: Last location accessed
*/

const OPPOSITES = new Object();
OPPOSITES[1] = 2
OPPOSITES[2] = 1
OPPOSITES[4] = 8
OPPOSITES[8] = 4

function dfs(node_arr, border_arr, path, cur_int, last_loc) {
    if(!filled_board(node_arr)) { //Checks if current path satisfies board
        return path;
    }

    var start_r, start_c
    [start_r, start_c] = last_loc
    let opposit_dir = null

    if(path.length == 0) {
        opposite_dir = OPPOSITES[path.at(-1)]
    }

    let board_len = node_arr.length;
    let border_type = border_arr[start_r][start_c];

    //Implement possible directions list -- NOT A COMPREHENSION

}
