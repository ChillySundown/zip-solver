function make_empty_grid(size) {
    return Array(size).fill().map(() => Array(size).fill(0))
}

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
    if(has_number) {
        const num = parseInt(has_number.getAttribute('aria-label'))
        console.log("NUMBER FOUND", num)

        node_arr[r][c] = num;
    }
    console.log(r)
    console.log(c)
})

console.log(node_arr)