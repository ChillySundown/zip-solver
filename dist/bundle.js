(() => {
  // src/setup.js
  var directions = /* @__PURE__ */ new Map();
  directions.set(1, [0, 1]);
  directions.set(2, [0, -1]);
  directions.set(4, [1, 0]);
  directions.set(8, [-1, 0]);
  var OPPOSITES = {};
  OPPOSITES[1] = 2;
  OPPOSITES[2] = 1;
  OPPOSITES[4] = 8;
  OPPOSITES[8] = 4;
  function out_of_bounds(coords, board_len) {
    return coords.some((pos) => pos < 0 || pos >= board_len);
  }
  function filled_board(node_arr) {
    const filled_loc = (loc) => loc < 0;
    for (const row of node_arr) {
      if (!row.every(filled_loc)) {
        return false;
      }
    }
    return true;
  }

  // src/solver.js
  function dfs(node_arr, border_arr, path, cur_int, last_loc) {
    if (filled_board(node_arr)) {
      return path;
    }
    let [start_r, start_c] = last_loc;
    let opposite_dir = null;
    if (path.length != 0) {
      opposite_dir = OPPOSITES[path.at(-1)];
    }
    let board_len = node_arr.length;
    let border_type = border_arr[start_r][start_c];
    let possible_directions = [];
    for (let dir of directions.keys()) {
      if (dir & border_type && dir != opposite_dir) {
        possible_directions.push(dir);
      }
    }
    for (const dir of possible_directions) {
      let [next_r, next_c] = [start_r + directions.get(dir)[0], start_c + directions.get(dir)[1]];
      if (!out_of_bounds([next_r, next_c], board_len)) {
        let loc_val = node_arr[next_r][next_c];
        let prev_cur = cur_int;
        if (loc_val == 0 || loc_val == cur_int + 1) {
          path.push(dir);
          node_arr[next_r][next_c] = -1;
          if (loc_val > 0) {
            cur_int++;
          }
          let result = dfs(node_arr, border_arr, path, cur_int, [next_r, next_c]);
          if (result) {
            return result;
          }
          path.pop();
          node_arr[next_r][next_c] = loc_val;
          cur_int = prev_cur;
        }
      }
      continue;
    }
    return null;
  }

  // scripts/index.js
  function make_empty_grid(size, val = 0) {
    return Array(size).fill().map(() => Array(size).fill(val));
  }
  var right = new KeyboardEvent("keydown", {
    key: "ArrowRight",
    bubbles: true
  });
  var left = new KeyboardEvent("keydown", {
    key: "ArrowLeft",
    bubbles: true
  });
  var down = new KeyboardEvent("keydown", {
    key: "ArrowDown",
    bubbles: true
  });
  var up = new KeyboardEvent("keydown", {
    key: "ArrowUp",
    bubbles: true
  });
  var keyStrokes = {
    1: right,
    2: left,
    4: down,
    8: up
  };
  var bar_types = ["border-right", "border-left", "border-bottom", "border-top"];
  var OPPOSITES2 = { 0: 1, 1: 0, 2: 3, 3: 2 };
  function zipSolver(cells) {
    let start_loc = [0, 0];
    let size;
    switch (cells.length) {
      case 36:
        size = 6;
        break;
      case 49:
        size = 7;
        break;
      case 64:
        size = 8;
        console.log("Some random junk");
        break;
      default:
        console.log("Error - Unforseen grid length error");
        size = 0;
    }
    const node_arr = make_empty_grid(size);
    const border_arr = make_empty_grid(size, 15);
    cells.forEach((cell) => {
      let index = parseInt(cell.getAttribute("data-cell-idx"));
      let r = Math.floor(index / size);
      let c = index % size;
      const has_number = cell.querySelector('[data-cell-content="true"]');
      const childDivs = cell.querySelectorAll(":scope > div");
      childDivs.forEach((barDiv) => {
        const divStyle = window.getComputedStyle(barDiv, "::after");
        if (!divStyle) {
          return;
        } else {
          for (let i = 0; i < 4; i++) {
            let bar_thick = parseInt(divStyle.getPropertyValue(bar_types[i]));
            if (bar_thick) {
              border_arr[r][c] &= ~(1 << i);
              if (bar_types[i] == "border-right" && c + 1 < size) {
                border_arr[r][c + 1] &= ~(1 << OPPOSITES2[i]);
              } else if (bar_types[i] == "border-left" && c - 1 >= 0) {
                border_arr[r][c - 1] &= ~(1 << OPPOSITES2[i]);
              } else if (bar_types[i] == "border-bottom" && r + 1 < size) {
                border_arr[r + 1][c] &= ~(1 << OPPOSITES2[i]);
              } else if (bar_types[i] == "border-top" && r - 1 >= 0) {
                border_arr[r - 1][c] &= ~(1 << OPPOSITES2[i]);
              }
            }
          }
        }
      });
      if (has_number) {
        const num = parseInt(has_number.getAttribute("aria-label"));
        if (num == 1) {
          start_loc = [r, c];
        }
        node_arr[r][c] = num;
      }
    });
    console.log(node_arr);
    console.log(border_arr.map((row) => row.map((col) => col.toString(2))));
    let [startRow, startCol] = start_loc;
    node_arr[startRow][startCol] = -1;
    let filled_path = dfs(node_arr, border_arr, [], 1, start_loc);
    for (let move of filled_path) {
      document.activeElement.dispatchEvent(keyStrokes[move]);
    }
  }
  var observer = new MutationObserver(() => {
    const cells = document.querySelectorAll("[data-cell-idx]");
    if (cells.length > 0) {
      observer.disconnect();
      console.log("parsed zip puzzle");
      zipSolver(cells);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
