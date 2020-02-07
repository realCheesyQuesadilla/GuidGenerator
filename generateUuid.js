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

window.mynamespace = window.mynamespace || {};
mynamespace.generateUuid = function generateUuid () { 
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