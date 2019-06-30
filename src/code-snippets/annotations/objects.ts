const profile = {
  name: "zzh",
  age: 18,
  info: {
    tall: 1,
    weight: 2
  },
  setAge(newAge: number): void {
    this.age = newAge;
  }
};

const { age }: { age: number } = profile;
const { info }: { info: { tall: number; weight: number } } = profile;
