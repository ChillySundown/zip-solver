import * as utils from "../src/utils.js"

//Only injects script when Zip Site is loading
chrome.tabs.onUpdated.addListener(((tabId, changeInfo, tab) => {
    console.log("LETS FINISH THIS!!!")
    console.log(tab.url, changeInfo.status);
    const isZipPage = tab.url?.startsWith("https://www.linkedin.com/games/zip"); //Correct URL
    const isLoading = changeInfo.status === "loading"; 

    if(isZipPage && isLoading) {
        console.log("Executing script in background.js...");
        chrome.scripting.executeScript({
            target: {tabId},
            files: ["dist/scraper.js"]
        }).catch(err => console.warn("Injection failed", err));
        console.log("Script Executed!!!");
    }
}));

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms)); 

//Pick up message from content to simulate keyStrokes
chrome.runtime.onMessage.addListener(async (path, sender) => {
    console.log("Message recieved!")
    const {solvedPath} = path;
    console.log("filledPath initialized")
    await chrome.debugger.attach({tabId: sender.tab.id}, "1.3");
    console.log("attached chrome debugger")

    // Solve first move to activate timer
    await chrome.debugger.sendCommand({tabId: sender.tab.id}, "Input.dispatchKeyEvent", {
        type: "keyDown",
        key: utils.keyStrokes[solvedPath[0]]
    });
    await chrome.debugger.sendCommand({tabId: sender.tab.id}, "Input.dispatchKeyEvent", {
        type: "keyUp",
        key: utils.keyStrokes[solvedPath[0]]
    });
    console.log("Waiting two  second...")
    await sleep(2000);
    console.log("Continuing solving path")
    let restOfPath = solvedPath.slice(1);
    for(let move of restOfPath) { //Sends a keystroke command for each move
        await chrome.debugger.sendCommand({tabId: sender.tab.id}, "Input.dispatchKeyEvent", {
            type: "keyDown",
            key: utils.keyStrokes[move]
        });
        await chrome.debugger.sendCommand({tabId: sender.tab.id}, "Input.dispatchKeyEvent", {
            type: "keyUp",
            key: utils.keyStrokes[move]
        });
        //await sleep(40); //Pauses so LinkedIn thinks I'm a human
    }

    await chrome.debugger.detach({tabId: sender.tab.id})
}); 