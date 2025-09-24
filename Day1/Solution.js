const createHelloWorld=()=>{
    return function f(){
        return "Hello World"
    }
}

console.log(createHelloWorld())