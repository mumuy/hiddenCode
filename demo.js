(function(){
    var $div = document.createElement('DIV');
    document.body.appendChild($div);
    $div.style.position = 'fixed';
    $div.style.left = '0px';
    $div.style.top = '0px';
    $div.style.width = '100%';
    $div.style.height = '100%';
    $div.style.zIndex = 999;
    $div.style.background = 'rgba(0,0,0,0.85)';
    $div.style.color = '#fff';
    $div.style.lineHeight = '32px';
    $div.style.textAlign = 'center';
    $div.style.fontSize = '16px';
    $div.style.padding = '25px';
    $div.style.boxSizing = 'border-box';
    var words = ['这是一个关于JS加密的项目演示','当前的打字效果已经过脚本加密!','^_^ 如果你对此感兴趣','可尝试在页面中找到它的源码'];
    var printLine = function(word,callback){
        var $p = document.createElement('P');
        $div.appendChild($p);
        var i = 0;
        var hand = setInterval(function(){
            if(i<=word.length){
                $p.innerText = word.substr(0,i);
            }else{
                hand&&clearInterval(hand);
                callback();
            }
            i++;
        },100);
    };
    (function(){
        if(words.length){
            var word = words.shift();
            printLine(word,arguments.callee);
        }
    })();
    $div.onclick = function(){
        $div.style.display = 'none';
    };
})();
