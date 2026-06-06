//---- SOLVER TESTS ----

export const test1_nodes = [
    [ 1,  0,  0,  0,  0, 11,  0],
    [ 0,  0,  9,  0,  0,  0,  0],
    [ 0,  8,  0, 10,  0,  6,  0],
    [ 0,  0,  0,  0,  0,  0,  0],
    [ 0,  7,  0,  3,  0,  5,  0],
    [ 0,  0,  0,  0,  4,  0,  0],
    [ 0,  2,  0,  0,  0,  0, 12],
];

export const test1_start_loc = [0,0];

export const test1_borders = [
    //row 0
    [0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111],
    //row 1
    [0b1111, 0b1110, 0b1100, 0b1101, 0b1111, 0b1111, 0b1111],
    //row 2
    [0b1111, 0b1111, 0b1111, 0b1111, 0b1110, 0b1100, 0b1101],
    //row 3
    [0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111],
    //row 4
    [0b1110, 0b1100, 0b1101, 0b1111, 0b1111, 0b1111, 0b1111],
    //row 5
    [0b1111, 0b1111, 0b1111, 0b1110, 0b1100, 0b1101, 0b1111],
    //row 6
    [0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111]
]

export const test1_path = [
  ...Array(6).fill(4),  // 6× Down (node 1 → node 2 area)
  ...Array(3).fill(1),  // 3× Right (through node 2 at step 1)
  ...Array(2).fill(8),  // 2× Up → node 3
  ...Array(1).fill(1),  // 1× Right
  ...Array(2).fill(4),  // 2× Down → node 4
  ...Array(1).fill(1),  // 1× Right
  ...Array(5).fill(8),  // 5× Up (through nodes 5, 6)
  ...Array(1).fill(2),  // 1× Left
  ...Array(2).fill(4),  // 2× Down
  ...Array(2).fill(2),  // 2× Left
  ...Array(2).fill(4),  // 2× Down
  ...Array(1).fill(2),  // 1× Left
  ...Array(5).fill(8),  // 5× Up (through nodes 7, 8)
  ...Array(1).fill(1),  // 1× Right
  ...Array(2).fill(4),  // 2× Down (through node 9)
  ...Array(1).fill(1),  // 1× Right → node 10
  ...Array(2).fill(8),  // 2× Up
  ...Array(3).fill(1),  // 3× Right (through node 11)
  ...Array(6).fill(4),  // 6× Down → node 12
];

export const test2_nodes = [
    [0, 0, 0, 0, 0, 0],
    [0, 4, 0, 2, 0, 0],
    [3, 0, 0, 0, 0, 1],
    [6, 0, 0, 0, 0, 8],
    [0, 0, 5, 0, 7, 0],
    [0, 0, 0, 0, 0, 0],
]

export const test2_borders = [
    //row 0
    [0b1111, 0b1011, 0b1011, 0b1011, 0b1011, 0b1111],

    //row 1
    [0b1111, 0b0111, 0b0110, 0b0101, 0b0111, 0b1111],

    //row 2
    [0b1111, 0b1011, 0b1110, 0b1101, 0b1011, 0b1111],

    //row 3
    [0b1111, 0b0111, 0b1110, 0b1101, 0b0111, 0b1111],

    //row 4
    [0b1111, 0b1011, 0b1010, 0b1001, 0b1011, 0b1111],

    //row 5
    [0b1111, 0b0111, 0b0111, 0b0111, 0b0111, 0b1111],
]

export const test2_path = [
    ...Array(2).fill(2),     //Left 2
    ...Array(8),            //Up
    ...Array(1).fill(2),    // Right 2
    ...Array(8),            // Up
    ...Array(2).fill(5),    // Left 5
    ...Array(2).fill(4),  // Down 2
    ...Array(1).fill(1),  // Right
    ...Array(1).fill(8),  // Up
    ...Array(1).fill(1),  // Right
    ...Array(3).fill(4),  // Down 3
    ...Array(1).fill(2),  // Left
    ...Array(1).fill(8),  // Up
    ...Array(1).fill(2),  // Left
    ...Array(2).fill(4),  // Down 2
    ...Array(5).fill(1),  // Right 5
    ...Array(1).fill(8),  // Up
    ...Array(2).fill(2),  // Left 2
    ...Array(1).fill(8),  // Up
    ...Array(2).fill(1),  // Right 2
];

export const test3_nodes = [
    [0, 0, 0,  9, 10, 0, 0, 0],
    [0, 0, 6,  0,  0,12, 0, 0],
    [0, 8, 0,  0,  0, 0,11, 0],
    [7, 0, 0,  0,  0, 0, 0,13],
    [3, 0, 0,  0,  0, 0, 0,14],
    [0, 2, 0,  0,  0, 0,15, 0],
    [0, 0, 4,  0,  0, 5, 0, 0],
    [0, 0, 0,  1, 16, 0, 0, 0],
];

export const test3_borders = [
    [0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111],
    [0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111],
    [0b1111, 0b1111, 0b1111, 0b1110, 0b1101, 0b1111, 0b1111, 0b1111],
    [0b1111, 0b1111, 0b1111, 0b1110, 0b1001, 0b1111, 0b1111, 0b1111],
    [0b1111, 0b1111, 0b1111, 0b1110, 0b0101, 0b1111, 0b1111, 0b1111],
    [0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111],
    [0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111],
    [0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111, 0b1111],
];

export const test3_path = [
  ...Array(3).fill(2),  // Left 3
  8,                    // Up
  1,                    // Right
  8,                    // Up
  2,                    // Left
  8,                    // Up
  ...Array(2).fill(1),  // Right 2
  ...Array(2).fill(4),  // Down 2
  ...Array(3).fill(1),  // Right 3
  ...Array(2).fill(8),  // Up 2
  2,                    // Left
  4,                    // Down
  2,                    // Left
  ...Array(4).fill(8),  // Up 4
  2,                    // Left
  ...Array(2).fill(4),  // Down 2
  ...Array(2).fill(2),  // Left 2
  8,                    // Up
  1,                    // Right
  8,                    // Up
  2,                    // Left
  8,                    // Up
  ...Array(4).fill(1),  // Right 4
  ...Array(3).fill(4),  // Down 3
  1,                    // Right
  8,                    // Up
  1,                    // Right
  8,                    // Up
  2,                    // Left
  8,                    // Up
  ...Array(2).fill(1),  // Right 2
  ...Array(3).fill(4),  // Down 3
  2,                    // Left
  4,                    // Down
  1,                    // Right
  4,                    // Down
  2,                    // Left
  4,                    // Down
  1,                    // Right
  4,                    // Down
  ...Array(3).fill(2),  // Left 3
];