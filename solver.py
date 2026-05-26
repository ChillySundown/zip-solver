import setup

"""
Depth-First Search Algorithm for traversing graph
    - node_arr: 2D-Array of integers symbolizing both numbered nodes and empty/filled nodes
"""

def dfs(node_arr, border_arr, start_point, path):
    start_x = start_point[0]
    start_y = start_point[1]

    border_type = border_arr[start_x][start_y] #Gives us type of border so we can bitmask



    

