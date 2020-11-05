
// You have a list of thongs. Print them in the console  in a row so that they line up to the right to the longest

const arrayOfStrings : Array<string> = ["s","strsddas","sdt","sadsadsadas","abjire","hjtd","dasde"];

function solve(args: Array<string>) { 

   const findLongestString = args.sort( (textA:string , textB:string ) => textA.length - textB.length).map( (text:string) => text.length)[args.length - 1];

   args.map( (text:string) => 

      console.log(text.padStart(findLongestString))

   );

}

solve(arrayOfStrings);

