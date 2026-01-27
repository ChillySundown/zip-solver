
directions = {
    'up': (-1, 0),
    'down': (1, 0),
    'left': (0, -1),
    'right': (0, 1)
}


barrier_types = {
    0: {},
    1: {'right'},
    2: {'left'},
    3: {'right', 'down'},
    4: {'right', 'left'},
    5: {'left', 'down'},
    6: {'left', 'right', 'down'},
    7: {'up'},
    8: {'up', 'right'},
    9: {'up', 'left'},
    10: {'up', 'right', 'down'},
    11: {'up', 'right', 'left'},
    12: {'up', 'left', 'down'},
    13: {'up', 'left', 'right', 'down'}
}


"""
board: A 2-dimensional list of numbers symbolizing different spots
    - 0 -> Spot is empty
    - 1, 2, 3...n -> Spot is path node
    - float('inf') -> Spot is taken by current path

barriers: A 2-dimensional list of integers symbolizing the type of 
currentPath: A list of directions starting from the first node
"""
def out_of_bounds(head, board_len):
    return any(not (0 <= pos <= board_len) for pos in head)            

def solver(board, barriers, currentPath):
    return 