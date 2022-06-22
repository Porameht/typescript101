// if else

if (true || false) {
    console.log("Always executed")
}

if (false ) {
    console.log("Never executed")
}

let x: number = 10;
let y: number = 50;

// for (let x = 10; x < y; x++) {
//     console.log(x) 
// }

if(x < y){
    console.log("eiei")
}else{
    console.log("jubjub")
}


let selectMenu : number = 0;
switch (selectMenu) {
    case 0:
        console.log("Hello")
        break;
    case 1:
        console.log("World")
        break;
    case 2:
        console.log("Hello World")
        break;
    default:
        break;
}