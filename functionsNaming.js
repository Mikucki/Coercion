function printRecords(recordIds) {
	let arr = [];
	for(let i = 0; i < recordIds.length; i++){
		let search = recordIds.find(studentRecords.id);
		let sort = search.sort(studentRecords.name);
		let cos = arr.push(sort);
	}
	console.log(cos)


}
let paid = [];
let notPaid = [];

function paidStudentsToEnroll() {
	for(let i = 0; i < studentRecords.length; i++) {
		let lookUp = studentRecords.paid;
		let lookUpQ = studentRecords.paidQ;
		if(lookUp === true) {
			paid.push(studentRecords.id)
		} else {
			notPaid.push(studentRecords.id)
		}
	return notPaid
	return paid
	}
		

function remindUnpaid(recordIds) {
	
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paidQ: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
