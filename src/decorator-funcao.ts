function decorator1() {
  console.log("From decorator 1.");

  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator!");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}

function decorator2() {
  console.log("From decorator 2.");

  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator!");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}

function decorator3() {
  console.log("From decorator 3.");

  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator!");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}

class Carro {
  @decorator1()
  @decorator2()
  @decorator3()
  vrum() {
    console.log("Vrum vrum!!!");
  }
}

const c1 = new Carro();
c1.vrum();
