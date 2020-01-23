/**
* @author Rokop, Luke (lrokop14@gmail.com)
* @version 0.0.1
* @summary Exercise 4 || created 1-21-20
* @todo
*/

 "use strict";
 const PROMPT = require ('readline-sync');
 const IO = require (`fs`);
 let customerID, firstName, lastName, service, choice;
let totalSpent = 0;
let customer = []
let master = []

function main(){
	setChoice();
	if(choice == 1){
		setCustomerID();
		setFirstName();
		setLastName();
		setService();
		setTotalSpent();
	firstName = customer[0];
	lastName = customer[1];
	customerID = customer[2];
	totalspent = customer[3];
	master.push(customer);
	setSave();
	}else if(choice == 2){
	setFirstName();
	if(firstName = master[0]){
		setService();
		setPaidTotal();
		if(master[3] >= 750){
			console.log(`/n${firstName} ${lastName} gets a free haircut`)
		}
		setSave();
	}else{
		console.log(master)
	}
}

 main();
	function setChoice(){
		choice = PROMPT.question(`\n please select a choice [1 = new customer, 2 = old customer, 3 = manuscript]`);
}
	function setFirstName(){
		firstName = PROMPT.question(`\n What is your first name?`);
}	
	function setLastName(){
		lastName = PROMPT.question(`\nWhat is your last name?`);
}
	function setService(){
	 service = PROMPT.question(`\nWhat would you like to have done today? [1= manicure, 2= haircut, 3= full sevice]`);
}
	
	function setTotalSpent(){
	const Haircut= 25
	const Manicure= 35
	const fullservice= 60
	if (service ==1){
		totalSpent = (totalSpent + Haircut);
	}else if{
		totalSpent = (totalSpent + Manicure);
	}else{
		totalSpent = (totalSpent + fullservice);
	}
}	
	function setCustomerID(){
		customerID = Math.round(Math.random()*3000)+1
		if(custtomerID == master[2]{
			setCusomerID();
		}
}
	
	function setSave(){
		save = IO.unlink(`master.txt`)
		save = IO.appendfile(`master.txt, exercise-5.js)
}