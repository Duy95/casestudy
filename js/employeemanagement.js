import employee from "./employee.js";

function main() {
  let employees = new Array();
  employees = initemployee(employees);
  outputemployees(employees);

  // inputemployees (employees)
  // outputemployees (employees)
}

function outputemployees(employeelist) {
  console.log("list of employees is: ");
  employeelist.forEach((e) => console.log(e));
}

function initemployee(employeelist) {
  let firstemployee = new employee(1, "tý", 500, 50);
  let secondemployee = new employee(2, "tèo", 550, 55);
  let thirdemployee = new employee(3, "tồ", 450, 45);
  let fouthemployee = new employee(4, "bin", 600, 60);
  let fifthemployee = new employee(5, "bo", 650, 65);

  employeelist.push(firstemployee);
  employeelist.push(secondemployee);
  employeelist.push(thirdemployee);
  employeelist.push(fouthemployee);
  employeelist.push(fifthemployee);
  return employeelist;
}
main();
