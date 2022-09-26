let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
nameCheck = nameRegex.test("Bridgelabz"); 
console.log(nameCheck);

// *********************************UC-1****************************************************
 
let pinCode =RegExp('^[0-9]{6}$');
 pinCheck = pinCode.test("400089");
 console.log(pinCheck);

// ************************************UC-2*****************************************************

let pinCode =RegExp('^[A-Z]{1}[0-9]$');
pinCheck = pinCode.test("A400088");
console.log(pinCheck);

// ***************************************UC-3*****************************************************
let pinCode =RegExp('^[A-Z]{1}[0-9]$');
pinCheck = pinCode.test("400088B");
console.log(pinCheck);

// ******************************************UC-4*****************************************************
let pinCode =RegExp('^[0-9]{6}$');
 pinCheck = pinCode.test("400089");
 console.log(pinCheck);

