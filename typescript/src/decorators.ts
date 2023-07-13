function Logger(msg: string){
    return function (constructor: Function) {
        console.log(msg);
        
    }
    
}

@Logger("Mujaheed")
class Person{
    name = "test"
    constructor(){
        console.log("Object Creation");
        
    }
}

