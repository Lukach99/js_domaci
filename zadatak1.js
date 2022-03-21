const userWord = process.argv[2];

function poliWord(word){

    let strLenght = word.length - 1;

    for (let i = 0; i < word.length; i++) {

        if(word[i] != word[strLenght]){
            console.log(`${word} is not a palindrom`);
            break
        }

        strLenght--

        if((word.length - 1) === i){
            console.log(`${word} is a palindrom`);
            break
        }
    }
}

poliWord(userWord)

