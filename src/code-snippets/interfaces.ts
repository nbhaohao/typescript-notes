interface IPersonProfile {
  name: string;
  age: number;
  gender: string;
  sayHi(): string;
}
const zzhProfile = {
  name: "zzh",
  age: 18,
  gender: "male",
  sayHi() {
    return "hi";
  }
};

const printPerson_bad_style = (person: {
  name: string;
  age: number;
  gender: string;
}): void => {
  const { name, age, gender } = person;
  console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
};

const printPerson = (person: IPersonProfile): void => {
  const { name, age, gender } = person;
  console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
};

printPerson(zzhProfile);
