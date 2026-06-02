from solver import dfs
import test_inputs
import copy

def test_no_borders():
    open_borders = [[0b1111]*7 for _ in range(7)]
    board = copy.deepcopy(test_inputs.test1_nodes)
    board[0][0] = -1
    result = dfs(board, open_borders, list(), 1, (0, 0))
    assert len(result) != 0

def test_dfs1():
    board1 = copy.deepcopy(test_inputs.test1_nodes)
    board1[0][0] = -1
    assert dfs(board1, test_inputs.test1_borders, list(), 1, (0,0)) == test_inputs.test1_path

def test_dfs2():
    board2 = copy.deepcopy(test_inputs.test2_nodes)
    board2[2][5] = -1
    assert dfs(board2, test_inputs.test2_borders, list(), 1, (2,5)) == test_inputs.test2_path

def test_dfs3():
    board3 = copy.deepcopy(test_inputs.test3_nodes)
    board3[7][3] = -1
    assert dfs(board3, test_inputs.test3_borders, list(), 1, (7,3)) == test_inputs.test3_path
