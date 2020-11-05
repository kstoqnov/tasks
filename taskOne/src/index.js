// You have a list of thongs. Print them in the console  in a row so that they line up to the right to the longest

const arrayOfStrings = ["s", "strsddas", "sdt", "sadsadsadas", "abjire", "hjtd", "dasde"];

function solve(args) {
    let findLongestString = args.sort(function (textA, textB) {
        return textA.length - textB.length;
    }).map(function (text) {
        return text.length;
    })[args.length - 1];
    args.map(function (text) {
        return console.log(text.padStart(findLongestString));
    });
}


solve(arrayOfStrings);