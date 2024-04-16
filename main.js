//Assigment Solution
// Task 11
var names = ["Saim", "Afridi", "Raed", "Khan"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//Task 12
///let name : string[] = ["Saim","Raed","Afridi","Khan"]
var message = "Do you like to play football";
console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);
console.log(names[3] + " " + message);
// Task 13
//let transpotation : string [] = ["Honda Motocyle","Audi","Honda City",];
//transpotation.map((items) => console.log(`I would like to own a ${items}`));
// Task 14  
//let guestArr : string [] =  [ "Saim","Afridi","Raed", ];
//guestArr.map(( items ) => (console.log( 'Dear ${ items }, You are invited to the dinner' )));
// Task 15
//let guestArr : string[] = ["Saim","Afridi","Raed","Khan"];
//let canNotAttend : string = "Khan"
//console.log (canNotAttend+ "can not attend the dinner.")
//let newGuest : string = "Afsheen"
//guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
// Task 16 
///let guestArr : string[] = ["Afsheen","Afridi","Raed","Saim"];
//let canNotAttend : string = "Raed"
//l//et newGuest : string = "Aliza"
//guestArr[guestArr.indexOf(canNotAttend)] = newGuest
//console.log (guestArr)
//guestArr.map((items) =>
//  console.log(`Dear ${items}, I found a bigger dinner table so i am invited more peoples.`)
//)
//part2
//let guestbeg : string = "Rehan"
//guestArr.unshift(guestbeg);
//console.log(guestbeg)
//part3
//let middleGuset : string = "Aqsa"
//let middleIndex =guestArr.length/3
///guestArr.splice(middleIndex,0,middleGuset)
//console.log(guestArr)
//part4
//guestArr.push("Suraiya")
//console.log(guestArr)
//part5
//guestArr.map((items) =>
//console.log (`Dear ${items}, you are invited in the more people category on dinner`));
// Task 17
///initial list of guests
//let guests :string[] = ["Saim","Rehan","Ahsan","Raed","Afrid"];
//Informing that only two people can be invited
//console.log("Due to limited space, only two people can be invited for dinner.");
// Removing guests until only two names remain
//while(guests.length > 2) {
//const removedGuest = guests.pop();
//console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`);
//}
//Printing invitations to the remaining two guests
//guests.forEach((guest) =>  {
//console.log(`Dear ${guest}, you're still invited to dinner.`);
//})
//Removing the last two names from the list  
//guests.pop();
//guests.pop();
// printing the final list to confirm it's empty
//console.log( "Final guest list:", guests );
// Task 18
///Store the locations in an arry
//let placesToVisit : string[] = ["Tockyo", "Pakistan", "America", "China", "Japan"];
// print the arry in its original order
//console.log("Original order:", placesToVisit)
// print the arry in alphabetical order wihtout modifiying the actual result
//console.log("Alphabetical order:", [...placesToVisit].sort());
// Show that the arry is still in its original order
//console.log("Original order after sorting:", placesToVisit)
// print the arry reverse alphabetical order without changing the order of the original list 
//console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
// show the arry is still in its original order
//console.log("Original order after reverse sorting:", placesToVisit);
//Reverse the order of the list 
//console.log("Reverse order:",placesToVisit);
// Reverse the order of the list again to get back to the original order 
///placesToVisit.reverse();
//console.log("Back to original order:",placesToVisit);
//Sort the arry in alpabetical order
//placesToVisit.sort()
//console.log("Sorted inalphabetical order:", placesToVisit);
// sort the arry in reverse alphabetical order
//placesToVisit.sort((a,b) => b.localeCompare(a));
//console.log("Sorted in reverse alphabetical order:", placesToVisit);
//Task 19 
//let invitations :string[] = ["Raed", "Khan"]
//let count_invitations : number = invitations.length
//console.log(`//${count_invitations}peple will come to the dinner`)
//Task 20
//let country: string [] = ["Pakistan","India","NewYork","Japan","China"];
//console.log("List of country:");
//console.log(country);
//Task 21
//think of something you could store in a Typescript object.Write a program
//that create objects containing these items 
//let peson: {name: string, fname: string , age: number} = {name: "AfsheenAfridi", fname: "female" , age: 17}
//console.log(peson)
//Task 22
// Intentional Error: If you haven't received an arry index error in one of your
// program yet,try to make one happen. change an index in one of your programs
//produce an index error. make sure you correct the error before closing the program.
//const days : string [] = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
//console.log(days) {7}
//console.log(days[6])
//Task 23
//let car = "subaru";
//console.log("is car == 'subaru'? predict true")
//console.log(car == 'subaru')
//console.log("is car == 'honda city'? predict true")
//console.log(car != 'honda city')
//console.log("is car == 'subaru'? predict false")
//console.log(car == 'subaru')
//console.log("is car == 'SUBARU'? predict false")
//console.log(car == 'SUBARU')
//console.log("is car.lenght ==6? predict true")
//console.log(car.length ==6)
//console.log("is car.lenght !=10? predict true")
//console.log(car.length !=10)
//console.log("is 10 > 45 ? predict false")
//console.log(10 > 45)
//console.log("is 3 <= 2 ? predict false")
//console.log(3 <= 2)
//console.log("is 72 >= 83? predict false")
//console.log(72 >= 83)
//console.log("is car == `subaru` && car.lenght == 6? predict true")
//console.log(car == `subaru` && car.length == 6)
///Task 24
// More conditional test: you don't have to limit the number of test you create to 10. if you want to try more comparisons,
//write more test .have at least one true and one false result for each of the following:
//let name_1 :string = "afsheen"
//let name_2 :string = "afsheenafridi"
//let name_3 :string = "miss afsheenafridi"
//if (name_1 == name_3){
//console.log("names are equal")
//}else {
//console.log("namesarenot equal")
//}
//if("names_1 !=names_2"){
//console.log("names are equal")
//}else {
//console.log("names are not equal")
//}
//let age_1 : number = 18
//let age_2 : number = 22
//if (age_1 ==18){
//console.log("eligible for vote")
//}
//if (age_1 !=22){
//console.log("eligible for vote in older category")
//}
//if (age_1 <= age_2){ //less
//console.log("younger")
//}
//if(age_2 >= age_1){ //greater
//console.log("older")
//}
//if (age_1 ==18 && age_2 == 22){
//console.log("person is eligible for vote")
//}
//if (age_1 == 18 || age_2 != 22 ){
//console.log("person is eligible not for vote")
//}
//let country : string [] = ["pakistan","turkey","japan","china"]
//if ("country.includes"){
//console.log("pakistan is in country list")
//}
//task 25
//let alien_color = "green"
//if(alien_color == "green")
//console.log("you earn 5 points")
//let alien_color : string = "red"
//if (alien_color == "green")
// console.log ("no output")
//task 26
//et alien_color = "green"
//if(alien_color == "green") {
//console.log("player just earned 5 points for shooting the alien")
//}else{
//console.log("player just earned 10 points")
//}
//let alien_color = "red"
//if(alien_color == "green") {
//console.log("player just earned 5 points for shooting the alien")
//}else{
//console.log("player just earned 10 points")
//}
//task 27
//let alien_color: string = "red"
//if(alien_color == "green"){
//console.log("5 points")
//}else if (alien_color == "yellow" ) {
//console.log ("10 points")
//}else {
//console.log ("15 points")
//}
// task 28.................2, 4 ,13, 20, 65, other 
//let age : number = 100
//if (age < 2){
//console.log("you are a baby")
//}else if (age < 4) {
//console.log("you are a toddler")
//}else if (age < 13) {
//console.log("you are a kid ")
//}//else if (age < 20) {
//console.log("you are a teenager ")
//}else if (age < 65) {
// console.log("you are a adult ")
//}
//task 29
//let favourite_fruit : string [] = ["kivi","orange","apples","berry","peach"]
///if ("favourite_fruit.kivi") {
///console.log("kivi")
//}
////if ("favourite_fruit.peach") {
/// console.log("you really like bananas")
//}
//if ("favourite_fruit.orange") {
//console.log("orange")
//}
///if ("favourite_fruit.berry") {
///console.log("you really like bananas")
//}
//if ("favourite_fruit.apple") {
//console.log("apple")
//}
//TASK 30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print
//a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again
//let users : string [] = ["eric","saim","rehan","ahsan","admin"]
//for(let user of users) {
//if(user === "admin") {
//console.log(" Hello admin, would you like to see a status report?")
///}else {
//console.log(`Hello ${user},thank you for logging in again`)
//}
//}
//Task 31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
//let users : string [] = ["admin","eric","saim","rehan","ahsan"]
//if(users.length ===0) {
//console.log("we need to find some users!")
//}else {
//for(let user of users){
//if(user === "admin") {
//console.log(" Hello admin, would you like to see a status report?")
//} else   {
//console.log(`Hello ${user},thank you for logging in again`)
//}
//}
//}
//users = []
//if(users.length ===0) {
//console.log("we need to find some users")
//}
// Task 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person 
//will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//let current_users : string [] = ["admin","Eric","Saim","Rehan","ahsan"]
//let new_users : string [] = ["admin","ahsan","Aliza","Suraiya","Afsheen"]
//let current_users_lower : string [] = current_users.map(user => user.toLowerCase()) 
//for (let new_user of new_users) {
//if ("current_users_lower.new_user.toLocaleLowerCase") {
// console.log(`Sorry ${new_user}, that name is taken`)
//}else {
//console.log (`Yes ${new_user}, is still in available list`)
//}
//}
// Task 33
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
// Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array//• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line
///let numbers :  number [] =[1,2,3,4,5,6,7,8,9,]
//for(let number of numbers) {
///if(number ===1) {
// console.log(`$(number)st`) /// 1st
////}else if(number ===2) {
//console.log(`$(number)nd`)   /// 2nd
//}else if(number ===3) {
//console.log(`$(number)rd`)   /// 3rd
//}else {
//console.log(`$(number)th`)   /// 4th , 5th , 6th , 7th , 8th , 9th
///}
//}
// Task 34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop  to print 
//the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
//For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza.The output should consist 
//of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
//let favorite_pizza : string [] =["afghani","fajita","chicken"]
//for (let pizza of favorite_pizza) {
//console.log(pizza)
//}
//for(let pizza of favorite_pizza) {
//console.log(`I really like ${pizza} pizza!`)
//}
//console.log("nI really love pizza")
///Task 35
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, 
//and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, 
//such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common.
//You could print a sentence such as Any of these animals would make a great pet!
///let animals : string [] = ["cat","lion","dog"]
//for (let animal of animals){
//console.log(animal)
//}
//console.log("\n")
//for(let animal of animals) {
//console.log(` A ${animal} has a tail`)
//}
//console.log("\n all of these are great pets! but i love cats more ")
// Task 36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
//The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
///function makeShirt(size: string, text: string) : void {
//console.log(` you order a ${size} shirt that says ${text}`)
//}
//makeShirt('large','"i love typescript"')
//makeShirt('meduim','"i need a big shirt"')
// Task 37 
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//function makeShirt(size: string = 'large', text: string = 'I love typescript') : void {
//console.log(` you have order a ${size}, shirt that says ${text}`)
//}
//makeShirt();
//makeShirt('meduim')
// different message
//makeShirt('small','I need a big shirt to wear')
// Task 38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a 
//simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
//Call your function for three different cities, at least one of which is not in the default country.
//function describe_city(city: string, country: string = 'pakistan' ):  void {
// console.log(`${city} is in ${country}`)
//}
//describe_city('karachi') // default sentence 
//describe_city('france','europe')
//describe_city('lahore is in pakistan')
// Task 39
//City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
//function citycountry(city: string, country: string): string {
//return`${city},${country}`
//}
//let c1 = citycountry('lahore', 'pakistan')
//let c2 = citycountry('tokyo' ,'japan')
//let c3 = citycountry('paris' ,'france')
//console.log(c1)
//console.log(c2)
//console.log(c3)
// Task 40
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist 
//name and an album title, and it should return a Object containing these two pieces of information. Use the function to make 
//three dictionaries representing different albums. Print each return value to show that Objects are storing the album
//information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//If the calling line includes a value for the number of tracks, add that value to the album’s Object.Make at least one new 
//function call that includes the number of tracks on an album
//function makeAlbum ( artist: string, title: string ):{artist: string, title: string} {
//const dictionaries = {
//artist: artist.charAt(0).toUpperCase( ) + artist.slice(1),
// title: title.charAt(0).toUpperCase( ) + title.slice(1)
// }
// return dictionaries;
//}
//let album = makeAlbum("ali", "light")
//console.log(album)
//album = makeAlbum("saim", "red wave")
//console.log(album)
//album = makeAlbum("rehan", "seenbreez")
//console.log(album)
// Task 41 
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.
///function show_magicians(magicians: string[]): void {
//for (const magician of magicians) {
//console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
// }
//}
//const magician: string[] = ["saim","rehan","ahsan"];
//show_magicians(magician)
//Task 42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies 
//the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list 
//has actually been modified.
///let magicianNames = ["Saim", "Ahsan", "Rehan"]
//function show_magicians(greet: string){
//for(let items of magicianNames ){
//console.log(greet,items);
//}
//} 
//show_magicians("Hello, How are you Mr.");
//show_magicians("Hello, ");     //2nd times calling
// Task 43
//Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of the 
//array of magicians’ names.Because the original array will be unchanged, return the new array and store 
//it in a separate array. Call show_magicians() with each array to show that you have one array of the
//original names and one array with the Great added to each magician’s name
//Define the function to show magician name
///function show_magician(magicians: string[]){
// magicians.forEach (name =>  console.log(name));
//}
//function to make magician great through .map() it will modify Array
///function make_great (magicians: string[]){
//return magicians.map(name => 'The Great ${name}');
//}
//Define an array of magicians name
///let magician_names = ["Harry", "Poter","Saim","Ahsan"];
//Making a copy of Original  array through . slice() function
//let copy_magician_names = magician_names.slice()
//Modify the copied array to include " The Great " with their names  
//let copy_great_magicians = make_great(copy_magician_names);
//show both arrays original and copied
//Original
//console.log("Original Array\n")
//show_magician(magician_names);
//Copied
//console.log("\nCopied Array\n")
//show_magician(copy_great_magicians)
// Task44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function 
///should have one parameter that collects as many items as the function call provides, and it should print
// a summary of the sandwich that is being ordered. Call the function three times, using a different number
// of arguments each time
///function sandwich(...items:string []): void{
//console.log("Sandwich order")
//for (let i = 0;i < items.length; i++ ){
//console.log(`-${items[i]}`)
//}
//}
//console.log("enjoye you sandwich saim afidi")
//sandwich('capsicum', 'tomato','chicken')
//sandwich('beef', 'cheese')
//sandwich('garlic chicken', 'mayo sauce')
// Task 45
//Cars: Write a function that stores information about a car in a Object. The function should always
//receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs, such as a color or an
//optional feature. Print the Object that’s returned to make sure all the information was stored correctly
//type car ={
//manufacture : string 
// model: string
// [key: string]: any;
//}
//function createCar(manufacture: string, model: string, optional: Record<string,any>): car {
//return {
//manufacture,
//model,
//optional
//}
//}
//const mycar: car = createCar("toyota", "corolla", { color: "silver" , year: "2024" })
//console.log(mycar)
