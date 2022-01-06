/**
 * This class used to return all the products that a shop can sell
 */

type ProductsBuilder = CarBuilder | RocketBuilder;
type Products = Car | Rocket;

class MainBuilder {

    public build(toBuild: ProductsBuilder): Products {
        toBuild.initiate();
        toBuild.addFeatures();
        return toBuild.getProduct();
    }

}

class CarBuilder {
    private car: Car;

    public initiate() {
        this.car = new Car()
    }

    public addFeatures() {
        // write n  number of steps if we want
        this.car.setColor();
    }

    public getProduct() {
        return this.car;
    }
}

class Car {

    private color: string;

    public setColor() {
        this.color = "red";
    }
    public getFeatures() {
        return this.color;
    }
}


class RocketBuilder {
    private rocket : Rocket;

    public initiate() {
        this.rocket = new Rocket();
    }
    public addFeatures() {
        // write n  number of steps if we want
        this.rocket.setComapany();
    }
    public getProduct() {
        return this.rocket;
    }
}

class Rocket {
    private company: string;

    public setComapany() {
        this.company = "Air India";
    }
    public getFeatures() {
        return this.company;
    }
}

function starter() {
    
    const mainBuilder = new MainBuilder();
    
    const buildCar = new CarBuilder();
    const car = mainBuilder.build(buildCar);
    console.log(car.getFeatures());

    const buildRocker = new RocketBuilder();
    const rocket = mainBuilder.build(buildRocker);
    console.log(rocket.getFeatures())
}
starter();


