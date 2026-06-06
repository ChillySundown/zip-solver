import {dfs} from '../src/solver.js'
import * as TestInput from './test_inputs.js'

test('7x7 Grid Puzzle Test', () => {
    expect(dfs(TestInput.test1_nodes, TestInput.test1_borders, [], 0, TestInput.test1_start_loc)).toEqual(TestInput.test1_path);
}); 
