import setup

"""
Depth-First Search Algorithm for traversing graph
    - node_arr: 2D-Array of integers symbolizing both numbered nodes and empty/filled nodes
    - border_arr: 2D-Array of 4-bit ints symbolizing borders of node
    - path: List that contains current path that gets updated with each recursive call
    - cur_int: Last visited numbered node
"""

def dfs(node_arr, border_arr, path, cur_int):
    start_x = path.pop()[0]
    start_y = path.pop()[1]

    border_type = border_arr[start_x][start_y] #Gives us type of border so we can bitmask

    possible_directions = [dir for dir in setup.directions if dir & border_type] #Iterates over keys btw





    

