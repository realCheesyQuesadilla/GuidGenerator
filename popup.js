document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', 
    onclick, false)

    window.mynamespace = window.mynamespace || {};
    function onclick () {
        chrome.tabs.query({currentWindow: true, active: true},
            function (tab) {
                chrome.tabs.sendMessage(tab[0].id, mynamespace.generateUuid())
            })
    }
}, false)
