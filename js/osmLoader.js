var zoom;
zoom=7;

function plus() {
    zoom++;

    if(zoom>18)
    {
        zoom=18;
    }
    return zoom;
}
function minus() {
    zoom--;

    if(zoom<0)
    {
        zoom=0;
    }
    return zoom;
}

function getUrl(m,n) {
    var url='https://a.tile.openstreetmap.org/'
    //zoom=8;
    var long=document.getElementById('longitude').value;
    var lat=document.getElementById('latitude').value;
    var x=x_number(long);
    var y=y_number(lat);
    var format='.png';
    if(m==2 && n==1)
    {
        url += zoom + '/' + x + '/' + y + format;
    }
    else if(m==1 && n==1)
    {
        x=x-1;
        url += zoom + '/' + x + '/' + y + format;
    }
    else if(m==0 && n==1)
    {
        x=x-2;
        url += zoom + '/' + x + '/' + y + format;
    }
    else if(m==3 && n==1)
    {
        x=x+1;
        url += zoom + '/' + x + '/' + y + format;
    }
    else if(m==4 && n==1)
    {
        x=x+2;
        url += zoom + '/' + x + '/' + y + format;
    }
    else if(m==2 && n==0)
    {
        y=y-1;
        url += zoom + '/' + x + '/' + y + format;
    }
    else if(m==1 && n==0)
    {
        x=x-1;
        y=y-1;
        url += zoom + '/' + x + '/' + y + format;
    }
    else if(m==0 && n==0)
    {
        x=x-2;
        y=y-1;
        url += zoom + '/' + x + '/' + y + format;
    }
    else if(m==3 && n==0)
    {
        x=x+1;
        y=y-1;
        url += zoom + '/' + x + '/' + y + format;
    }
    else if(m==4 && n==0)
    {
        x=x+2;
        y=y-1;
        url += zoom + '/' + x + '/' + y + format;
    }
    else if(m==2 && n==0)
    {
        x=x-2;
        y=y+1;
        url += zoom + '/' + x + '/' + y + format;
    }
    else if(m==0 && n==2)
    {
        x=x-2;
        y=y+1;
        url += zoom + '/' + x + '/' + y + format;
    }
    else if(m==1 && n==2)
    {
        x=x-1;
        y=y+1;
        url += zoom + '/' + x + '/' + y + format;
    }
    else if(m==2 && n==2)
    {
        y=y+1;
        url += zoom + '/' + x + '/' + y + format;
    }
    else if(m==3 && n==2)
    {
        x=x+1;
        y=y+1;
        url += zoom + '/' + x + '/' + y + format;
    }
    else if(m==4 && n==2)
    {
        x=x+2;
        y=y+1;
        url += zoom + '/' + x + '/' + y + format;
    }
    return url;
}

function clearCanvas()
{
    var c=document.getElementById("map");
    var cxt=c.getContext("2d");
    c.height=c.height;
}
function draw()
{
    var c=document.getElementById("map");
    var ctx=c.getContext("2d");
    var wide=(800/2-128)/256;
    wide=Math.ceil(wide);
    for(var i=0;i<5;i++) {
        for(var j=0;j<3;j++) {
            (function(i,j) {
                clearCanvas();
                var offset_x=i*256;
                var offset_y=j*256;
                var Img = new Image();
                Img.src=getUrl(i,j);
                Img.onload=function () {
                    ctx.drawImage(Img,offset_x,offset_y);
                    }
                })(i,j);
        }
    }
}
//(w/2-128)/256 上取整
loadimage(url,callback)
{
    Img
}
function enlarge(){
    plus();
    if(zoom<19)
    {
        draw();
    }
}
function reduce(){
    minus();
    if(zoom>-1)
    {
        draw();
    }
}