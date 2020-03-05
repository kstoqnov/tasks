// Имаш списък от стрингове. Един от тях се повтаря. Напиши програма, която го намира.
var arrayOfStrings = ["s", "strsddas", "sdt", "sadsadsadas", "sdt", "hjtd", "dasde"];
function solve(args) {
    args.some(function (text, index) {
        if (args.indexOf(text) !== index) {
            console.log(args[index]);
        }
    });
}
solve(arrayOfStrings);
