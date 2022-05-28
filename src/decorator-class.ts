function classDecorator(constructor: Function) {
  console.log("Executando classDecorator...");

  console.log(constructor);
}

@classDecorator
class User {
  constructor(private name: string, private age: number, private job: string) {}
}

const u1 = new User("Luke", 54, "developer");
