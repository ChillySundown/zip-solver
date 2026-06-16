import * as utils from "../src/utils.js"

//Pick up message from content to simulate keyStrokes
chrome.runtime.onMessage().addListener(async (path, sender) => {
    const {filledPath} = path;

    await chrome.debugger.attach({tabId: sender.tab.id}, 1.3);

    for(let move of filledPath) { //Sends a keystroke command for each move
        chrome.debugger.sendCommand({tabId: sender.tab.id}, "Input.dispatchKeyEvent", {
            type: "KeyDown",
            key: utils.keyStrokes[move]
        });

        await sleep(30); //Pauses so LinkedIn thinks I'm a human
    }

    await chrome.debugger.detach({tabId: sender.tab.id})
}); 