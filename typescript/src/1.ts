//Variable declaration
let x: string = "Mujaheed";
let y: number = 123;
let abc: boolean = true;
let longNum = 123_456_789;

/*
---- Types in Typescript ----
string
boolean
number
null
undefined
object
array
any
unknown
never
enum
tuple
*/

//functions
function test(x: number, y: string): number {
  return x;
  // return y; => error
}

//array
let numbers1: number[] = [1, 2, 3, 4];
let numbers2: Array<number> = [1, 2, 3];

//Tuple => Fixed length array
let user: [number, string] = [1, "name"];
// user = ["test", 1] => error;

// object
let employee: {
  firstName: string;
  lastName: string;
  email: string;
  age?: number; // Optional property
  getFullName(): string;
} = {
  firstName: "Mohammad",
  lastName: "Mujaheed",
  email: "mmujaheed@master-works.sa",
  getFullName: function () {
    return `FullName is ${this.firstName} ${this.lastName}`;
  },
};

//Union
let union: boolean | number = true;
union = 354;

//Enum
enum Size {
  Small = 1,
  Medium,
  Large,
}
