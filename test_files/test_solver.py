from solver import dfs
import test_inputs

def test_dfs():
    open_edges = [[0b1111]*7 for _ in range(7)]
    test_inputs.test1_nodes[0][0] = -1
    result = dfs(test_inputs.test1_nodes, open_edges, [], 1, (0, 0))
    assert len(result) != 0
    assert dfs(test_inputs.test1_nodes, test_inputs.test1_edges, [], 1, (0,0)) == test_inputs.test1_path