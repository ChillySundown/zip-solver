import setup

"""
Depth-First Search Algorithm for traversing graph
    - node_arr: 2D-Array of integers symbolizing both numbered nodes and empty/filled nodes
    - border_arr: 2D-Array of 4-bit ints symbolizing borders of node
    - path: List that contains current path that gets updated with each recursive call
    - cur_int: Last visited numbered node
    - last_dir: Last direction moved in
"""

def dfs(node_arr, border_arr, path, cur_int, last_loc):
    if(setup.check_solved(node_arr)):
        return path

    start_x, start_y = last_loc
    opposite_dir = None
    if path:    
        opposite_dir = (path[-1] << 1) if path[-1] & 0b0101 else (path[-1] >> 1) #Might not need this because we already mark occupied nodes
    board_len = len(node_arr)


    border_type = border_arr[start_x][start_y] #Gives us type of border so we can bitmask

    possible_directions = [
        dir for dir in setup.directions 
        if dir != opposite_dir and dir & border_type
    ] #Iterates over keys btw
    #Need to also make sure you don't cross trail and 

    for dir in possible_directions:
        next_loc = (start_x + setup.directions[dir][0], start_y + setup.directions[dir][1])
        loc_val = node_arr[next_loc[0]][next_loc[1]]
        if(not setup.out_of_bounds(next_loc, board_len) and (loc_val == 0 or loc_val == cur_int + 1)):
            path.append(dir)
            node_arr[next_loc[0]][next_loc[1]] = -1
            if loc_val == cur_int + 1:
                cur_int += 1

            dfs(node_arr, border_arr, path, cur_int, next_loc)

            path.pop()
            node_arr[next_loc[0]][next_loc[1]] = loc_val








    

