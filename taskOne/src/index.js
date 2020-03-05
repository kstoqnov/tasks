// Имаш списък от стрингове. Принтирай ги в конзолата по 1 на ред, така че да се подравнят вдясно до най-дългия
var arrayOfStrings = ["s", "strsddas", "sdt", "sadsadsadas", "abjire", "hjtd", "dasde"];
function solve(args) {
    var findLongestString = args.sort(function (textA, textB) { return textA.length - textB.length; }).map(function (text) { return text.length; })[args.length - 1];
    args.map(function (text) {
        return console.log(text.padStart(findLongestString));
    });
}
solve(arrayOfStrings);
