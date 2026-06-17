import * as utils from "../src/utils.js"
//Pick up message from content to simulate keyStrokes
chrome.runtime.onMessage.addListener(async (path, sender) => {
    console.log("Message recieved!")
    const {solvedPath} = path;
    console.log("filledPath initialized")
    await chrome.debugger.attach({tabId: sender.tab.id}, "1.3");
    console.log("attached chrome debugger")

    for(let move of solvedPath) { //Sends a keystroke command for each move
        console.log("Dude what the hell")
        await chrome.debugger.sendCommand({tabId: sender.tab.id}, "Input.dispatchKeyEvent", {
            type: "keyDown",
            key: utils.keyStrokes[move]
        });

        //await sleep(30); //Pauses so LinkedIn thinks I'm a human
    }

    await chrome.debugger.detach({tabId: sender.tab.id})
}); 