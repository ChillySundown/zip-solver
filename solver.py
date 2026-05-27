import setup

"""
Depth-First Search Algorithm for traversing graph
    - node_arr: 2D-Array of integers symbolizing both numbered nodes and empty/filled nodes
    - border_arr: 2D-Array of 4-bit ints symbolizing borders of node
    - path: List that contains current path that gets updated with each recursive call
    - cur_int: Last visited numbered node
    - last_dir: Last direction moved in
"""

def dfs(node_arr, border_arr, path, cur_int, last_dir):
    start_x, start_y = path[-1]
    opposite_dir = (last_dir << 1) if last_dir & 0b0101 else (last_dir >> 1)

    #if win condition
    # end recursion

    border_type = border_arr[start_x][start_y] #Gives us type of border so we can bitmask

    possible_directions = [
        dir for dir in setup.directions 
        if dir != opposite_dir and dir & border_type
    ] #Iterates over keys btw
    #Need to also make sure you don't cross trail and 

    for dir in possible_directions:
        next_loc = (start_x + setup.directions[dir][0], start_y + setup.directions[dir][1])
        if(not setup.out_of_bounds(next_loc, len(border_arr))):
            






    

