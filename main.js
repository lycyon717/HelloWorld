function strrep(num) {
    for (var p = 0; p < num; p++) {
        var result = "";
        for (var i = 0; i < 10 - p; i++) {
            result += " ";
        }
        for (var j = 0; j < p; j++) {
            result += "* ";
        }
        console.log(result);
    }
}
strrep(5);
