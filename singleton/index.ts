class otherClass {
    public myFunction() {
        console.log("My function called")
    }
}

class SingleTone {
    private instance : any;

    public createInstance() {
        if(!this.instance) {
            console.log("New Instance created")
            this.instance = new otherClass();
        }
        return this.instance;
    }
}

function creatObject() {
    let instance: any;
    return function() {
        if(!instance) {
            console.log("new instance created")
            instance = new otherClass()
        }
        return instance;
    }
}


/**
 * Using closure
 */
// (function() {
//     const creater = creatObject()
//     const obj = creater();
//     const obj2 = creater();
//     const obj3= creater();
// })();

/**
 * Using class
 */
 (function() {
    const singleToneObj = new SingleTone()
    const obj = singleToneObj.createInstance();
    const obj2 = singleToneObj.createInstance();
    const obj3= singleToneObj.createInstance();
})()