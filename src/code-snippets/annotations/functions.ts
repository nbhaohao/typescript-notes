const add = (a: number, b: number): number => {
  return a + b;
};

// 虽然有类型推导，但最好不要省略返回值的类型
const subtract_wrong = (a: number, b: number) => {
  a - b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const looger = (message: string): void => {
  console.log(message);
};

const throwError = (errorMessage: string): string => {
  if (errorMessage !== "zzh") {
    throw new Error(errorMessage);
  }
  return errorMessage;
};

const forecast = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
