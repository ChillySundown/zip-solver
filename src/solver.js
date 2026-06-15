import * as utils from "./utils.js"

/*
Depth-First Search Algorithm for traversing graph
    - node_arr: 2D-Array of integers symbolizing both numbered nodes and empty/filled nodes
    - border_arr: 2D-Array of 4-bit ints symbolizing borders of node
    - path: List that contains current path that gets updated with each recursive call
    - cur_int: Last visited numbered node
    - last_loc: Last location accessed
*/


export default function dfs(node_arr, border_arr, path, cur_int, last_loc) {
    if(filled_board(node_arr)) { //Checks if current path satisfies board
        return path;
    }

    let [start_r, start_c] = last_loc
    let opposite_dir = null

    if(path.length != 0) {
        opposite_dir = OPPOSITES[path.at(-1)];
    }

    let board_len = node_arr.length;
    let border_type = border_arr[start_r][start_c];

    //Implement possible directions list -- NOT A COMPREHENSION
    let possible_directions = [];
    for(let dir of directions.keys()) {
        if(dir & border_type && dir != opposite_dir) {
            possible_directions.push(dir)
        }
    }

    for(const dir of possible_directions) {
        let [next_r, next_c] = [start_r + utils.directions.get(dir)[0], start_c + utils.directions.get(dir)[1]];
        if(!utils.out_of_bounds([next_r, next_c], board_len)) {
            let loc_val = node_arr[next_r][next_c];
            let prev_cur = cur_int //Stores current highest int

            if((loc_val == 0 || loc_val == cur_int+1)) {
                path.push(dir);
                node_arr[next_r][next_c] = -1; //Sets node to occupied
                
                if(loc_val > 0) {
                    cur_int++;
                }

                let result = dfs(node_arr, border_arr, path, cur_int, [next_r, next_c]);
                if(result) {
                    return result;
                }

                path.pop(); 
                node_arr[next_r][next_c] = loc_val; //Restoring value after backtracking attempts
                cur_int = prev_cur;
            }
        }
        continue;
    }
    return null;
}
//module.exports = dfs
