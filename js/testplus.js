var zoom;
zoom=7;
function plus() {
    zoom++;

    return zoom;
}
function test() {
    alert(zoom);
}

// document.getElementById('plus').addEventListener('click', function() {
//     //document.getElementById('historyMsg').innerHTML = '';
//     plus(zoom);
//     alert(zoom);
//     //document.getElementById('url').innerHTML=zoom;
// }, false);