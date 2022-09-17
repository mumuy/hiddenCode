(function(Global){
    var _chars = '\u200b\u200c\u200d\u200e\u200f\u202a\u202c\u202d';
    var _split = '\ufeff';

    var encode = function(code,mark,host){
		if(host){                                              // 确保脚本只在指定域下正常工作
			code = 'if(location.host=="'+host+'"){'+code+'}else{location.href = "http://'+host+'";}';
		}
        code = 'self["fn_'+mark+'"] = function(){'+code+'};';  // 确保代码调用没有被修改
        return  code.split('').map(function(value){
        	return value.codePointAt(0).toString(_chars.length).split('').map(function(i){
                return _chars[i];
            }).join('');
        }).join(_split);
    };
    Global.hiddenCode = function(param){
        var options = Object.assign({},{
            host:'',
            mark:'Hello World!',
            code:''
        },param);
        return 'console.log("'+options['mark']+encode(options['code'],options['mark'],options['host'])+'");';
    };
})(window);
