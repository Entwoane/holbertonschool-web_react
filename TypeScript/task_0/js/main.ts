interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Gerard',
  lastName: 'Majax',
  age: 86,
  location: 'France',
};
const student2: Student = {
  firstName: 'Sylvain',
  lastName: 'Mirouf',
  age: 158,
  location: 'France',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

const headerRow = document.createElement('tr');
const th1 = document.createElement('th');
th1.textContent = 'FirstName';
th1.style.border = '1px solid black';
const th2 = document.createElement('th');
th2.textContent = 'location';
th2.style.border = '1px solid black';
headerRow.appendChild(th1);
headerRow.appendChild(th2);
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = '1px solid black';

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  locationCell.style.border = '1px solid black';

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);
