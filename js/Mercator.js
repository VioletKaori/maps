//经度转墨卡托
function handle_x(x) {
    return (x / 180.0) * 20037508.34;
}

//纬度度转墨卡托
function handle_y(y) {
    if (y > 85.05112) {
        y = 85.05112;
    }

    if (y < -85.05112) {
        y = -85.05112;
    }

    y = (Math.PI / 180.0) * y;
    var tmp = Math.PI / 4.0 + y / 2.0;
    return 20037508.34 * Math.log(Math.tan(tmp)) / Math.PI;

}
//经度转瓦片行号
// function row_number(x) {
//     //x = x / 180 + 1;
//     //x = x * Math.pow(2,)
//     x=handle_x(110);
//     var tmp=Math.pow(2,18-1);
//     x=x/tmp;
//     x=x/256;
//
//     return x;
// }
function x_number(long) {
    var x=long;
    x = x / 180 + 1;
    x = x * Math.pow(2,zoom-1)
    x=Math.floor(x);
    return x;
}

function y_number(lat) {
    var y=lat;
    y = Math.PI * y / 180;
    var tmp = Math.tan(y) + 1 / Math.cos(y)
    tmp=Math.log(tmp) / Math.PI;
    tmp=1-tmp;
    y=tmp*Math.pow(2,zoom-1);
    y=Math.ceil(y);
    return y;
}

document.getElementById('local').innerHTML=handle_x(110)+' '+handle_y(60);
document.getElementById('number').innerHTML=x_number(114)+' '+y_number(30);

//墨卡托转经度
function handle_me_x(x)
{
    return x/20037508.34*180;
}

//墨卡托转纬度
function handle_me_y(my)
{
    var mmy = my/20037508.34*180;
    y= 180/Math.PI*(2*Math.atan(Math.exp(mmy*Math.PI/180))-Math.PI/2);
    return y;
}