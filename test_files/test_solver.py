from solver import dfs
import test_inputs
import copy

def test_no_edges():
    open_edges = [[0b1111]*7 for _ in range(7)]
    board = copy.deepcopy(test_inputs.test1_nodes)
    board[0][0] = -1
    result = dfs(board, open_edges, list(), 1, (0, 0))
    assert len(result) != 0

def test_dfs1():
    board1 = copy.deepcopy(test_inputs.test1_nodes)
    board1[0][0] = -1
    assert dfs(board1, test_inputs.test1_edges, list(), 1, (0,0)) == test_inputs.test1_path

def test_dfs2():
    board2 = copy.deepcopy(test_inputs.test2_nodes)
    board2[2][5] = -1
    assert dfs(board2, test_inputs.test2_edges, list(), 1, (2,5)) == test_inputs.test2_path
