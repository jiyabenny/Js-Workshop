let str=" I am studying Javascript Essentials with the help of LetsUpgrade and the classes are very interesting. ";
//returns the unicode value of the character at the specified location
console.log(str.charCodeAt("a"));
//used to concatenate the two strings
console.log(str.concat("blah blah blah blah"));
//to check whether a string ends with the corresponding substring
console.log(str.endsWith("ing. "));
//display the index of the first occurrence of the substring
console.log(str.indexOf("ing"));
//display the index of the last occurrence of the substring
console.log(str.lastIndexOf("ing"));
//returns the length of the string
console.log(str.length);
//replace the first occurrence of the string with another string
console.log(str.replace("e","o")) ;
//returns the index of the string to be searched
console.log(str.search("ial"));
//returns a portion of the string within the specified indices
console.log(str.slice(10,25));
//returns an array after spliting the whole string to substrings from where the specified string has  occurred 
console.log(str.split(" "));
//to check whether a string starts with the specified substring
console.log(str.startsWith(" I "));
//returns a substring starting with an index and of the specified length
console.log(str.substr(3,10));
//returns a substring starting with an index and ending with the specified index
console.log(str.substring(3,10));
//returns the string after removing the trailing and leading whitespaces in the string
console.log(str.trim());
let arr=[1,2,3,4,1,6];
let arr1=arr;
//for concatenation of 2 arrays
console.log(arr.concat(["a","b","c"]));
//returns the first occurrence index of the element
console.log(arr.indexOf(1));
//returns the last occurrence index of the element
console.log(arr.lastIndexOf(1));
//removes the last element of the array and returns it
console.log(arr.pop());
//appends the element to the end of the array and returns the new length of the array
console.log(arr.push(6));
//reverses the elements of the array
console.log(arr.reverse());
console.log(arr.reverse());
//removes the 1st element of the array and returns it
console.log(arr.shift());
//append an element to the front of the array and returns the new length
console.log(arr.unshift(1));
//returns the portion of the array within the specified starting and ending indices
console.log(arr.slice(2,4));
//returns the sorted array
console.log(arr.sort());
//returns string representation of the array
console.log(arr.toString());
//removes elements from the array from the specified index to the given count and returns the deleted elements
console.log(arr.splice(3,2));
