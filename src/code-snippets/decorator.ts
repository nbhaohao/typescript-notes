@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `this boat color is ${this.color}`;
  }

  @logError("Oops, my error")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator weather: string
  ): void {
    if (speed === "fast") {
      console.log("switch");
    } else {
      console.log("nothing");
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log("key", key);
  console.log("index", index);
}

function testDecorator(target: any, key: string) {
  // console.log(key);
}

function logError(message: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(message);
      }
    };
  };
}
