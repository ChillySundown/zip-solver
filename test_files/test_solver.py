from solver import dfs
import test_inputs

def test_dfs():
    test_inputs.test1_nodes[0][0] = -1
    count = 0
    assert dfs(test_inputs.test1_nodes, test_inputs.test1_edges, list(), 1, (0,0)) == test_inputs.test1_path