// Имаш списък от стрингове. Един от тях се повтаря. Напиши програма, която го намира.

const arrayOfStrings : Array<string> = ["s","strsddas","sdt","sadsadsadas","sdt","hjtd","dasde"];

function solve(args: Array<string>) { 

    args.some((text:string, index:number) => { 

        if( args.indexOf(text) !== index ){

            console.log(args[index]);

        } 
        
    
    });

}

solve(arrayOfStrings);