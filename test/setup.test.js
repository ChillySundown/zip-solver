import {directions, out_of_bounds, filled_board} from "../src/setup.js"

//OOB Tests
//OOB = "Out of Bounds"
test('assert (0,0) is not OOB on 6x6 grid', () => {
    expect(out_of_bounds([0,0], 6)).toBe(false);
})

test('assert (-1,3) is OOB on 6x6 grid', () => {
    expect(out_of_bounds([-1,3], 6)).toBe(true);
})

test('assert (2,2) is not OOB on 6x6 grid', () => {
    expect(out_of_bounds([2,2], 6)).toBe(false);
})

test('assert (7,4) is OOB on 7x7 grid', () => {
    expect(out_of_bounds([7,4], 7)).toBe(true);
})

test('assert (7,7) is not OOB on 8x8 grid', () => {
    expect(out_of_bounds([7,7], 8)).toBe(false);
})

test('assert (0,-1) is OOB for 6x6 grid', () => {
    expect(out_of_bounds([0, -1], 6)).toBe(true);
})

test("assert (7,0) is OOB for 7x7 grid", () => {
    expect(out_of_bounds([7, 0], 7)).toBe(true);
})

test("assert (-1, 6) is OOB for 6x6 grid", () => {
    expect(out_of_bounds([-1, 6], 6)).toBe(true);
})

test("assert (5, 4) is not OOB for 6x6 grid", () => {
    expect(out_of_bounds([5, 4], 6)).toBe(false);
})

//Filled Boards
test('assert fully filled 7x7 board is true', () => {
    const board = [
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1]
    ]

    expect(filled_board(board)).toBe(true);
})

test("fully empty 7x7 board returns false", () => {
    const board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ]
    expect(filled_board(board)).toBe(false)
})

test("8x8 board with unvisited numbered nodes returns false", () => {
    const board = [
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1,  2, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1,  5, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1,  8, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1]
    ]
    expect(filled_board(board)).toBe(false)
})

test("6x6 board with one empty cell returns false", () => {
    const board = [
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1,  0, -1]
    ]
    expect(filled_board(board)).toBe(false)
})

test("6x6 board with one empty cell returns false", () => {
    const board = [
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1,  0, -1]
    ]
    expect(filled_board(board)).toBe(false)
})