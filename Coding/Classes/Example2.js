// Bad
class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class EmployeeTaxData extends Employee {
  constructor(ssn, salary) {
    super();
    this.ssn = ssn;
    this.salary = salary;
  }
}

// Good

class EmployeeTaxData {
  constructor(ssn, salary) {
    this.ssn = ssn;
    this.salary = salary;
  }
}

class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  setTaxData(ssn,salary) {
    this.taxData = new EmployeeTaxData(ssn,salary);
  }
}

