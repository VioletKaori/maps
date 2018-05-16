function OsmLayer()
 {
    var constructor =function (options) {
        var self=this;
        base(this,{
            demains:{'a','b','c'},url:'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
        });
    };
    var getUrl=function (zoom,x,y) {
        return base(this,'getUrl',zoom,x,y);
    };
    var prototype=constructor.prototype;
    prototype.getUrl=getUrl;
    return constructor;
}