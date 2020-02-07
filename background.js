chrome.commands.onCommand.addListener(function (command) {
    console.log('its listening');
    if(command === "generate"){
        console.log('it tried to generate');
        chrome.tabs.query({currentWindow: true, active: true},
            function (tab) {
                chrome.tabs.sendMessage(tab[0].id, generateUuid());
            })
    }
})

function generateUuid () { 
    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;
        if(d > 0){
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}