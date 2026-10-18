const hospitalName: string = "City Hospital";
let age: number = 45;
const isEmergency: boolean = true;
let balaceAmount: bigint = 1200000n;
let patientName: string | null = null;
let doctorName = undefined;
let browserName: string | undefined = undefined;
let browser: "chrome" | "firefox" | "edge";
let apiResponse: [number,string];
console.log(hospitalName);
console.log(age);
console.log(isEmergency);
console.log(typeof hospitalName);
console.log(typeof age);
console.log(typeof isEmergency);

//age ="45"; // This will cause a TypeScript error because 'age' is declared as a number, and we are trying to assign a string to it.
