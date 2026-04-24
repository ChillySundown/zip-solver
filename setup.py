
directions = {
    0b0001: (1, 0), # 0001 = Right
    0b0010: (-1, 0), # 0010 = Left
    0b0100: (0, -1), #0100 = Down
    0b1000: (0, 1), #1000 = Up
}

"""
Represents a barrier on the graph as a 4 bit value, 
where 0 is a wall in that direction and 1 is a valid way

Ex:
0000: 4 walls, no way
0001: 3 walls, right move valid
0010: 3 walls, left move valid
1110: 1 wall, up, down, left valid
1111: no walls, all directions valid
"""

barrier_types = {
    0b0000,
    0b0001,
    0b0010,
    0b0011,
    0b0100,
    0b0101,
    0b0110,
    0b0111,
    0b1000,
    0b1001,
    0b1010,
    0b1011,
    0b1100,
    0b1101,
    0b1110,
    0b1111
}
print(len(barrier_types))


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