**Linkedin Zip Solver Chrome Extension**

- Python based Chrome Extension that automatically solves LinkedIn's Zip puzzle
- Powered by DFS Backtracking Algorithm 
- JavaScript

I created this Zip Solver as a challenge. When a friend of mine beat my Zip record by one second, I promised myself I would never fall behind again. 

**DFS + Backtracking - The Workhorse**
    - Originally written in Python, I rewrote the backend in JavaScript to make it highly compatible with browsers
    - Every position in a puzzle's `borders_arr` is a 4-bit integer that describes which next moves are possible.
    - The possible moves are stored in a list obtained by bitmasking the node's borders with each direction
    - We calculate the next location for each move and only apply DFS if the next node is empty (0) or our current highest node + 1

**DOM Manipulation - The Connection**
    - Querys the document for a collection of divs that represent the game board cells.
    
    - Checks if each cell has a number-field via the QuerySelector function for the node_arr, otherwise keeps the node to 0
    

**UNDER CONSTRUCTION -- STAY TUNED**

**Chrome Web Store Release: TBD**