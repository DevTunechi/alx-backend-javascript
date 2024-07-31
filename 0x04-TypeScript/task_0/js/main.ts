// Define The Student Interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "Goodnews",
    lastName: "Akpan",
    age: 30,
    location: "Lagos"
};

const student2: Student = {
    firstName: "Rufus",
    lastName: "Ezugwu",
    age: 35,
    location: "Owerri"
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]): void {
	// Create table element
	const table = document.createElement('table');

	// Iterate over the students array and create rows
	students.forEach(student => {
	const row = table.insertRow();

	const firstNameCell = row.insertCell();
	const locationCell = row.insertCell();

 	firstNameCell.textContent =
student.firstName;
	locationCell.textContent = student.location;
     });

    // Append the table to the body of the document
    document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);
