/* Check to see whether an object 
contains a specified key */

function specifiedKey(key) {
	let myObject = {
	name: 'Karl',
	gender: 'male',
	age: 35
 }

 if(myObject.hasOwnProperty(key)) {
 	console.log('Available');
 } else {
 	console.log("Doesn't exist");
 }
}

specifiedKey('name');

