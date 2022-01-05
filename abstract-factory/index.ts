
class EmpClass {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    public say(){
        console.log(this.name);
    }
}

class EmpFactory{

    public createClass(name: string) {
        return new EmpClass(name);
    }
}

function run2() {
    const arr : EmpClass[] = [];
    const empFactory = new EmpFactory();
    arr.push((empFactory.createClass('abcd')));
    arr.push((empFactory.createClass('abcd2')));
    arr.push((empFactory.createClass('abcd3')));
    arr.push((empFactory.createClass('abcd4')));
    console.log(arr.length);
    arr.forEach((a : EmpClass) => {
        a.say()
    })
}

run2()