function fruitFactory(name, price){
    return {
        name,
        price 
    }
}


const fruits = [
    fruitFactory("jabuka", 2),
    fruitFactory("kruske", 5),
    fruitFactory("banana", 3),
    fruitFactory("naranca", 4),
    fruitFactory("jagoda", 7)
]

function isFruit(basketList){

    basketList.forEach(food => {
        fruits.find(({name}) => name === food) ? console.log(`${food} is fruit!`) : console.log(`${food} is not a fruit!`); 
    });

}


function howMany(budget){

    let money = budget;
    let basket = [];
    let noMoreFruit = false;

    /* Keeps fruits array in loop until you can't buy anymore fruit */
    while (money > 0 && noMoreFruit === false){

        /* checks if you can buy any fruit with leftover money */
        for (let i = 0; i < fruits.length; i++) {
            if( money - fruits[i].price < 0){
                noMoreFruit = true;
            } else {
                noMoreFruit = false
            }   
        }

        /* adding fruits to basket that you can buy until you don't have any money or while loop ends */
        for (let i = 0; i < fruits.length; i++) {
            if(money === 0) {
                break
            }

            if(money >= 0 && ((money - fruits[i].price) >= 0)){
                money -= fruits[i].price;
                basket.push(fruits[i].name);
            } 
   
        }
    }

    console.log(basket);
    console.log(`You have ${money} euro left.`);

}

isFruit(["jabuka", "burger", "banana", "naranca", "jagoda", "bzbzfbd", "banana"]); 
howMany(50);
