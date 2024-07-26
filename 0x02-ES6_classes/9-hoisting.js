export class HolbertonClass {
  constructor(year, location) {
    if (typeof year !== 'number' || year <= 0) {
      throw new Error('Year must be a positive number');
    }
    if (typeof location !== 'string' || location.trim() === '') {
      throw new Error('Location must be a non-empty string');
    }

    this._year = year;
    this._location = location;
  }

  // Getter for the year property
  get year() {
    return this._year;
  }

  // Getter for the location property
  get location() {
    return this._location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    if (typeof firstName !== 'string' || firstName.trim() === '') {
      throw new Error('First name must be a non-empty string');
    }
    if (typeof lastName !== 'string' || lastName.trim() === '') {
      throw new Error('Last name must be a non-empty string');
    }
    if (!(holbertonClass instanceof HolbertonClass)) {
      throw new Error('holbertonClass must be an instance of HolbertonClass');
    }

    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  // Getter for the full name of the student
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter for the Holberton class
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Getter for the full student description
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Creating instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Creating instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Exporting the list of students
export const listOfStudents = [student1, student2, student3, student4, student5];
