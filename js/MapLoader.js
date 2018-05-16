var constructor=function () {

};

var load = function (url,onLoad,onError) {
    var cached=cx3.TileCache.get(url);
    if(cached!==undefined)
    {
        setTimeout(function () {
            cx.call(onLoad,cached);
        },0);
        return cached
    }
}
else

