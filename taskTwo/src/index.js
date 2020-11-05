//You have a list of strings. One of them is repeated. Write a program that finds it.

const arrayOfStrings = ["s", "strsddas", "sdt", "sadsadsadas", "sdt", "hjtd", "dasde"];

function solve(args) {
    args.some(function (text, index) {
        if (args.indexOf(text) !== index) {
            console.log(args[index]);
        }
    });
}

solve(arrayOfStrings);
