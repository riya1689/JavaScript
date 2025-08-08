//common uncommon properties
//inheritence properties
//super class and sub class.
//main class is super class and class that use super class is subb class
//prototype inheritence -> create an object and make connection with another object
class Vehicle{
    constructor(name,price){
        this.name =name;
        this.price=price;
    }
    move(){
        console.log('car not moving')
    }
}
//extends is a keyword
//Super is function.parent claass or function k call kore
class Bus extends Vehicle{
    constructor(name,price,seat,ticketPrice){
        super(name,price);
            this.seat =seat;
            this.ticketPrice=ticketPrice;
    }
}
class Truck extends Vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load = load;
    }

}