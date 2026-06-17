import dfs from "../src/solver.js"
import * as utils from "../src/utils.js"

//Keys to search CSSStyles object of a given node to see if there is a barrier printed
const bar_types = ['border-right', 'border-left', 'border-bottom', 'border-top'];
const OPPOSITES = {0:1, 1:0, 2:3, 3:2};

export default function solvePath(cells) {
    let start_loc = [0,0];
    let size;
    switch(cells.length) {
        case 36:
            size = 6
            break
        case 49:
            size = 7
            break
        case 64:
            size = 8
            break
        default:
            console.log("Error - Unforseen grid length error")
            size = 0
    }

    const node_arr = utils.make_empty_grid(size)
    const border_arr = utils.make_empty_grid(size, 0b1111)

    cells.forEach(cell => {
        let index = parseInt(cell.getAttribute('data-cell-idx'))
        let r = Math.floor(index / size) 
        let c = index % size

        const has_number = cell.querySelector('[data-cell-content="true"]')

        //Check if there is a barrier at node
        const childDivs = cell.querySelectorAll(':scope > div');

        childDivs.forEach(barDiv => {
            const divStyle = window.getComputedStyle(barDiv, '::after'); 

            //If there is no barrier detected, skips div
            if(!divStyle) {
                return
            }
            else {
                for(let i = 0; i < 4; i++) {
                    let bar_thick = parseInt(divStyle.getPropertyValue(bar_types[i]));
                    //console.log(divStyle.getPropertyValue(bar_types[i]))
                    //console.log(bar_thick)
                    if(bar_thick) { //If there is a barried detected, set direction to 0
                        border_arr[r][c] &= ~(1 << i);

                        //After setting the barrier, performs a handshake with the adjacent barrier
                        if(bar_types[i] == 'border-right' && c+1 < size) {border_arr[r][c+1] &= ~(1 << OPPOSITES[i])}
                        else if(bar_types[i] == 'border-left' && c-1 >= 0) {border_arr[r][c-1] &= ~(1 << OPPOSITES[i])}
                        else if(bar_types[i] == 'border-bottom' && r+1 < size) {border_arr[r+1][c] &= ~(1 << OPPOSITES[i])}
                        else if(bar_types[i] == 'border-top' && r-1 >= 0) {border_arr[r-1][c] &= ~(1 << OPPOSITES[i])}
                    }
                }
            }
        });
        
        if(has_number) {
            const num = parseInt(has_number.getAttribute('aria-label'))
            //console.log("NUMBER FOUND", num)
            if(num == 1) {
                start_loc = [r, c];
            }
            node_arr[r][c] = num;
        }

    });

    console.log(node_arr)
    console.log(border_arr.map((row) => row.map((col) => col.toString(2))));

    let [startRow, startCol] = start_loc; //Starting value

    node_arr[startRow][startCol] = -1; // Set the start location to 1
    const filledPath = dfs(node_arr, border_arr, [], 1, start_loc);
    if(filledPath) {
        return filledPath//Sends a message to the backgroud
    } else {
        return Error("No Valid Path Found");
    }
}

//Observer that triggers when the grid is set up on the webpage
const observer = new MutationObserver(() => {
    const cells = document.querySelectorAll("[data-cell-idx]");
    if(cells.length > 0) {
        observer.disconnect();
        console.log("parsed zip puzzle");
        try {
            const solvedPath = solvePath(cells);
            //console.log("Is it array,", Array.isArray(solvedPath))
            chrome.runtime.sendMessage({solvedPath});
            console.log("message sent!!")
        } catch(error) {
            console.error(error)
        }
    }
});
observer.observe(document.body, {childList: true, subtree: true});
