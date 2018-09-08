function max(a, b){
    return Math.max(a, b);
}

function min(a, b){
    return Math.min(a, b);
}

function floor(a){
    return Math.floor(a);
}

function ceil(a){
    return Math.ceil(a);
}

function sqrt(a){
    return Math.sqrt(a);
}

function log(a){
    return Math.log(a);
}

function distance(x, y){
    return sqrt(x * x + y * y);
}

function rand(n){
    return floor(Math.random() * n);
}

function rand2(n){
    return Math.random() * n;
}

function width_to_px(x){
	return window_width / 100 * x;
}

function height_to_px(x){
	return window_height / 100 * x;
}

function to_percent_w(x){ // horizontal
    return x * 100 / window_width;
}

function to_percent_h(x){ // vertical
    return x * 100 / window_height;
}

function to_radian(x){
	return x / 180 * pi;
}

function to_deg(x){
    return x / pi * 180;
}

function sin_deg(x){
    return Math.sin(to_radian(x));
}

function cos_deg(x){
    return Math.cos(to_radian(x));
}

function to_hex(v){ // v -> 0xvv
    return (("00" + v.toString(16).toUpperCase()).substr(-2));
}

function hex_to_rgb(s){ // #rrggbb -> [r, g, b]
    return [parseInt(s.substr(1, 2), 16), parseInt(s.substr(3, 2), 16), parseInt(s.substr(5, 2), 16)];
}

function solution(x, y, a, b){ // a solution of salt, (x, y) on a:b
    return floor((x * a + y * b) / (a + b));
}


var pi = Math.PI;
var window_width = parseInt($(window).width()), window_height = parseInt($(window).height());
