var X = '* ';
var Y = ' ';
function strrep(num, num2, str, str2) {
    var result = ' ';
    for (var i = 0; i < num; i++) {
        result += str;
    }
    for (var j = 0; j < num2; j++) {
        result += str2;
    }
    return result;
}
for (var i = 0; i < 5; i++) {
    console.log(strrep(10 - i, i, Y, X));
}
