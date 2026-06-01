from solver import dfs
import test_inputs
import copy

def test_dfs1():
    open_edges = [[0b1111]*7 for _ in range(7)]
    board1 = copy.deepcopy(test_inputs.test1_nodes)
    board1[0][0] = -1
    result = dfs(board1, open_edges, list(), 1, (0, 0))
    assert len(result) != 0

def test_dfs2():
    board2 = copy.deepcopy(test_inputs.test1_nodes)
    board2[0][0] = -1
    assert dfs(board2, test_inputs.test1_edges, list(), 1, (0,0))== test_inputs.test1_path
