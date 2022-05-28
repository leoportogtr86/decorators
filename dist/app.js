"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorator1() {
    console.log("From decorator 1.");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator!");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
function decorator2() {
    console.log("From decorator 2.");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator!");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
function decorator3() {
    console.log("From decorator 3.");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator!");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
function classDecorator(constructor) {
    console.log("Executando classDecorator...");
    console.log(constructor);
}
var User = /** @class */ (function () {
    function User(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    User = __decorate([
        classDecorator
    ], User);
    return User;
}());
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.vrum = function () {
        console.log("Vrum vrum!!!");
    };
    __decorate([
        decorator1(),
        decorator2(),
        decorator3()
    ], Carro.prototype, "vrum", null);
    return Carro;
}());
// const c1 = new Carro();
// c1.vrum();
var u1 = new User("Luke", 54, "developer");
