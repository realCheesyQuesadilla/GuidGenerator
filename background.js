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
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }
      
        document.body.removeChild(textArea);
    }
})

