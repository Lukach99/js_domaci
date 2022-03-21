const userNum = process.argv[2];
let factNum = 1;

function fact(num){
    if(num === 1){
        return 
    }

    fact(num-1);
    
    factNum *= num;
}


fact(3)
console.log(factNum);

