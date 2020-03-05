
// Имаш списък от стрингове. Принтирай ги в конзолата по 1 на ред, така че да се подравнят вдясно до най-дългия

const arrayOfStrings : Array<string> = ["s","strsddas","sdt","sadsadsadas","abjire","hjtd","dasde"];

function solve(args: Array<string>) { 

   const findLongestString = args.sort( (textA:string , textB:string ) => textA.length - textB.length).map( (text:string) => text.length)[args.length - 1];

   args.map( (text:string) => 

      console.log(text.padStart(findLongestString))

   );

}

solve(arrayOfStrings);

