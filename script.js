function greet(parameter) 
{
    console.log('Hello, ' + parameter);
}

greet('Thea');

function getColor(number) {
    if (number >= 0 && number <= 12) {
        console.log("white");
    } else if (number >= 13 && number <= 18) {
        console.log("green");
    } else if (number >= 19 && number <= 25) {
        console.log("red");
    } else if (number >= 26 && number <= 99) {
        console.log("blue");
    } else {
        console.log("black");
    }
}

getColor(30); 
