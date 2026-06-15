import findPath from "scraper.js"

const observer = new MutationObserver(() => {
    const cells = document.querySelectorAll("[data-cell-idx]");
    console.log(cells)
    if(cells.length > 0) {
        observer.disconnect();
        console.log("parsed zip puzzle");
        let path = findPath(cells);
    }
});

window.addEventListener('keydown', (e) => console.log('keypressed:', e.key), true)
observer.observe(document.body, {childList: true, subtree: true});