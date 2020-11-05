//You have a list of strings. One of them is repeated. Write a program that finds it.

const arrayOfStrings : Array<string> = ["s","strsddas","sdt","sadsadsadas","sdt","hjtd","dasde"];

function solve(args: Array<string>) { 

    args.some((text:string, index:number) => { 

        if( args.indexOf(text) !== index ){

            console.log(args[index]);

        } 
        
    
    });

}

solve(arrayOfStrings);