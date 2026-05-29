from setup import out_of_bounds, filled_board, check_solved

def test_oob():
    assert out_of_bounds((0,0), 6) == False
    assert out_of_bounds((-1, 3), 6) == True
    assert out_of_bounds(((2,2)), 5) == False
    assert out_of_bounds((5, 4), 5) == True
    assert out_of_bounds((7,7), 8) == False
    assert out_of_bounds((0, -1), 6) == True
    assert out_of_bounds((7,0), 7) == True
    assert out_of_bounds((-1,6), 6) == True
    assert out_of_bounds((5, 4), 6) == False

def test_filled_boards():
    assert filled_board(
        [[-1 for i in range(6)] for j in range(6)]
    ) == True
    assert filled_board(
       [[0 for i in range(7)] for j in range(7)]
    ) == False

