
# def make_edges():
#     R, C = 8, 8
#     # Initialize all cells: outer edges blocked, interior open
#     # bits: up=8, down=4, left=2, right=1
#     e = [[0]*C for _ in range(R)]
#     for r in range(R):
#         for c in range(C):
#             up    = 8 if r > 0 else 0
#             down  = 4 if r < R-1 else 0
#             left  = 2 if c > 0 else 0
#             right = 1 if c < C-1 else 0
#             e[r][c] = up | down | left | right

#     def block_vertical(r, c):
#         # barrier between col c and col c+1 at row r
#         # remove 'right' from (r,c) and 'left' from (r,c+1)
#         e[r][c]   &= ~1  # clear right bit
#         e[r][c+1] &= ~2  # clear left bit

#     def block_horizontal(r, c):
#         # barrier between row r and row r+1 at col c
#         # remove 'down' from (r,c) and 'up' from (r+1,c)
#         e[r][c]   &= ~4  # clear down bit
#         e[r+1][c] &= ~8  # clear up bit

#     # Vertical barriers (left-right blocked)
#     # Left side of col3, rows 1-2 (between col2 and col3)
#     block_vertical(1, 2)
#     block_vertical(2, 2)
#     # Right side of col3, row 1 (between col3 and col4)
#     block_vertical(1, 3)
#     # Left side of col6, rows 2-3 (between col5 and col6)
#     block_vertical(2, 5)
#     block_vertical(3, 5)
#     # Right side of col6, rows 2-3 (between col6 and col7)
#     block_vertical(2, 6)
#     block_vertical(3, 6)
#     # Left side of col2, rows 4-5 (between col1 and col2)
#     block_vertical(4, 1)
#     block_vertical(5, 1)
#     # Right side of col2, rows 4-5 (between col2 and col3)
#     block_vertical(4, 2)
#     block_vertical(5, 2)
#     # Left side of col5, rows 5-6 (between col4 and col5)
#     block_vertical(5, 4)
#     block_vertical(6, 4)
#     # Right side of col5, rows 5-6 (between col5 and col6)
#     block_vertical(5, 5)
#     block_vertical(6, 5)

#     # Horizontal barriers (up-down blocked)
#     # Top of col3 bar: between row0 and row1, col2
#     block_horizontal(0, 2)
#     # Bottom of col3 bar: between row2 and row3, col3
#     block_horizontal(2, 3)
#     # Between row4 and row5, col4 (top of bar near node 4)
#     block_horizontal(4, 4)
#     # Between row6 and row7, col4 and col5
#     block_horizontal(6, 4)
#     block_horizontal(6, 5)

#     return e

# edges = make_edges()

# Print for verification
