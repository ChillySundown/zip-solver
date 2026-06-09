function make_empty_grid(size) {
    return Array(size).fill().map(() => Array(size).fill(0))
}

const bar_types = ['border-right', 'border-left', 'border-bottom', 'border-top'];

const cells = document.querySelectorAll('[data-cell-idx]')
console.log(cells[8])
let size = null
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
console.log(size)
const node_arr = make_empty_grid(size)
const border_arr = make_empty_grid(size)
console.log(node_arr)
console.log(border_arr)

cells.forEach(cell => {
    let index = parseInt(cell.getAttribute('data-cell-idx'))
    let r = Math.floor(index / size) 
    let c = index % size

    const has_number = cell.querySelector('[data-cell-content="true"]')

    //Check if there is a barrier at node
    const bar_div = cell.lastElementChild
    const node_style = window.getComputedStyle(bar_div, '::after'); 

    if(node_style) {
        for(let i = 0; i < 4; i++) {
            let bar_thick = parseInt(node_style.getPropertyValue(bar_types[i]));
            console.log(bar_thick)
            let bar_dir = 1 << i;
            if(!bar_thick) { //If there is no barrier in that direction
                border_arr[r][c] |= bar_dir;
            }
        }
    }
    
    if(has_number) {
        const num = parseInt(has_number.getAttribute('aria-label'))
        //console.log("NUMBER FOUND", num)

        node_arr[r][c] = num;
    }

})

console.log(node_arr)
for(let r = 0; r < 6; r++) {
    for(let c = 0; c < 6; c++) {
        console.log(r, c, border_arr[r][c].toString(2))
    }
}