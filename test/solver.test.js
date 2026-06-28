import dfs from '../src/solver.js'
import * as TestInput from './test_inputs.js'


test('7x7 Grid Puzzle Test', () => {
    const node_board = TestInput.test1_nodes.map(row => row.slice()); //Shallow copy of 2D array
    node_board[TestInput.test1_start_loc[0]][TestInput.test1_start_loc[1]] = -1;
    expect(dfs(node_board, TestInput.test1_borders, [], 1, TestInput.test1_start_loc)).toEqual(TestInput.test1_path);
}); 

test('6x6 Grid Puzzle Test', () => {
    const node_board = TestInput.test2_nodes.map(row => row.slice());
    node_board[TestInput.test2_start_loc[0]][TestInput.test2_start_loc[1]] = -1;
    expect(dfs(node_board, TestInput.test2_borders, [], 1, TestInput.test2_start_loc)).toEqual(TestInput.test2_path);
});

test('8x8 Grid Puzzle Test', () => {
    let node_board = TestInput.test3_nodes.map(row => row.slice());
    node_board[TestInput.test3_start_loc[0]][TestInput.test3_start_loc[1]] = -1;
    expect(dfs(node_board, TestInput.test3_borders, [], 1, TestInput.test3_start_loc)).toEqual(TestInput.test3_path);

    node_board = TestInput.test4_nodes.map(row => row.slice()); 
    node_board[TestInput.test4_start_loc[0]][TestInput.test4_start_loc[1]] = -1;
    expect(dfs(node_board, TestInput.test4_borders, [], 1, TestInput.test4_start_loc)).toEqual(TestInput.test4_path);
});