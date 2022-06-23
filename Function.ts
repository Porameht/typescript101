
function sayHello(name:string, lastname:any): string {
    return name + lastname +"Game duck";
}


function sum(a:number, b:number, ...rest:number[]): number {
    return a + b + rest.reduce((a,b)=> a + b, 0);
}


function add({c,d}:{c:number,d:number}) : number {
    return c + d;

}
console.log("Hello " + add({d:500,c:10}));