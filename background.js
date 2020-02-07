//................................................................................................................................
//..................................dddd............... bbb.............................dddd.....................iiii.......dddd..
//..................................dddd............... bbb.............................dddd.....................iiii.......dddd..
//..................................dddd............... bbb.............................dddd................................dddd..
//.mmmmmmmmmmmmmm....aaaaaa....ddddddddd..eeeeee....... bbbbbbbb.bbyy...yyyy.......ddddddddd..aaaaaa..avvv..vvvv.iiii..ddddddddd..
//.mmmmmmmmmmmmmmm..aaaaaaaa..dddddddddd.eeeeeeee...... bbbbbbbbb.byyy..yyyy......dddddddddd.aaaaaaaa.avvv..vvvv.iiii.dddddddddd..
//.mmmmm.mmmmmmmmm.maaa.aaaaaadddd.ddddddeee.eeee...... bbbb.bbbbbbyyy..yyyy..... dddd.ddddddaaa.aaaaaavvv.vvvv..iiiiidddd.ddddd..
//.mmmm..mmmm..mmmm....aaaaaaaddd...dddddeee..eeee..... bbb...bbbbbyyy.yyyy...... ddd...dddd....aaaaaa.vvvvvvvv..iiiiiddd...dddd..
//.mmmm..mmmm..mmmm.aaaaaaaaaaddd...dddddeeeeeeeee..... bbb...bbbb.yyyyyyyy...... ddd...dddd.aaaaaaaaa.vvvvvvvv..iiiiiddd...dddd..
//.mmmm..mmmm..mmmmmaaaaaaaaaaddd...dddddeeeeeeeee..... bbb...bbbb.yyyyyyy....... ddd...dddddaaaaaaaaa.vvvvvvv...iiiiiddd...dddd..
//.mmmm..mmmm..mmmmmaaa.aaaaaaddd...dddddeee........... bbb...bbbb..yyyyyy....... ddd...dddddaaa.aaaaa..vvvvvv...iiiiiddd...dddd..
//.mmmm..mmmm..mmmmmaaa.aaaaaadddd.ddddddeee..eeee..... bbbb.bbbbb..yyyyyy....... dddd.ddddddaaa.aaaaa..vvvvvv...iiiiidddd.ddddd..
//.mmmm..mmmm..mmmmmaaaaaaaaa.dddddddddd.eeeeeeee...... bbbbbbbbb...yyyyy.........dddddddddddaaaaaaaaa..vvvvv....iiii.dddddddddd..
//.mmmm..mmmm..mmmm.aaaaaaaaa..ddddddddd..eeeeee....... bbbbbbbb.....yyyy..........ddddddddd.aaaaaaaaa...vvvv....iiii..ddddddddd..
//...................................................................yyyy.........................................................
//..................................................................yyyy..........................................................
//................................................................byyyyy..........................................................
//................................................................byyyy...........................................................
//................................................................................................................................


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

