
chrome.commands.onCommand.addListener(function (command) {
    window.mynamespace = window.mynamespace || {};
    if(command === "generate"){
        chrome.tabs.query({currentWindow: true, active: true},
            function (tab) {
                chrome.tabs.sendMessage(tab[0].id, mynamespace.generateUuid());
            })
    }
    else if(command === "copyGuid"){
        var textArea = document.createElement("textarea");
        textArea.value = mynamespace.generateUuid();
        textArea.style.position="fixed";  //avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
      
        try {
          var successful = document.execCommand('copy');
        } catch (err) {
          console.log('Unable to copy guid');
        }
      
        document.body.removeChild(textArea);
    }
})

