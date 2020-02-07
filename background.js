chrome.commands.onCommand.addListener(function (command) {
    window.mynamespace = window.mynamespace || {};
    if(command === "generate"){
        chrome.tabs.query({currentWindow: true, active: true},
            function (tab) {
                chrome.tabs.sendMessage(tab[0].id, mynamespace.generateUuid());
            })
    }
})
