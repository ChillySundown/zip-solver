import setup

"""
Depth-First Search Algorithm for traversing graph
    - node_arr: 2D-Array of integers symbolizing both numbered nodes and empty/filled nodes
    - border_arr: 2D-Array of 4-bit ints symbolizing borders of node
    - path: List that contains current path that gets updated with each recursive call
    - cur_int: Last visited numbered node
    - last_loc: Last location accessed
"""
OPPOSITES = {0b0001: 0b0010, 0b0010: 0b0001, 0b0100: 0b1000, 0b1000: 0b0100}

def dfs(node_arr, border_arr, path, cur_int, last_loc):
    if(setup.filled_board(node_arr)):
        return path

    start_r, start_c = last_loc
    opposite_dir = None
    if path:    
        opposite_dir = OPPOSITES[path[-1]] #Might not need this because we already mark occupied nodes

    board_len = len(node_arr)
    border_type = border_arr[start_r][start_c] #Gives us type of border so we can bitmask

    possible_directions = [
        dir for dir in setup.directions 
        if dir & border_type and dir != opposite_dir 
    ] 
    #Iterates over keys btw
    #Need to also make sure you don't cross trail and 
    for dir in possible_directions:
        next_loc = (start_r + setup.directions[dir][0], start_c + setup.directions[dir][1])
        if not setup.out_of_bounds(next_loc, board_len):
            loc_val = node_arr[next_loc[0]][next_loc[1]] #Storing current loc_val
            prev_cur = cur_int #Storing current highest int
            if((loc_val == 0 or loc_val == cur_int + 1)):
                path.append(dir)
                node_arr[next_loc[0]][next_loc[1]] = -1

                if loc_val > 0:
                    cur_int += 1
                
                result = dfs(node_arr, border_arr, path, cur_int, next_loc)
                if result:
                    return result
                
                path.pop()
                node_arr[next_loc[0]][next_loc[1]] = loc_val #Restoring values after backtrack attempt
                cur_int = prev_cur
        continue
    return None







    

