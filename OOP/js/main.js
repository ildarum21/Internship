class Plane{
    constructor(name){
        this.name =name;
    }
    takeoff(){
        console.log(this.name+" взлелел!");
    }
    landing(){
        console.log(this.name+" сел!");
    }
}
class Mig extends Plane{
    Attack(){
        console.log(this.name +' атакует!');
    }
}

let MIG =new Mig('МИГ');

let TU154 = new Plane('ТУ-154');



MIG.takeoff();
MIG.landing();
MIG.Attack();
TU154.takeoff();
TU154.landing();

