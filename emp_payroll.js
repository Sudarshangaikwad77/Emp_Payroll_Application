
class EmployeePayroll {
  constructor() {
    this.name = "";
    this.profile = "";
    this.gender = "";
    this.department = [];
    this.salary = 0;
    this.notes = "";
  }

  setName(name) {
    if (name && name.trim().length >= 3 && /^[A-Z][A-Za-z\s]*$/.test(name)) {
      this.name = name.trim();
    } else {
      throw new Error("Invalid name! Name must start with a capital letter and have a minimum of 3 characters.");
    }
  }

  Object.defineProperty(this, "name", {
      get: function() {
          return _name;
      },
      set: function(name) {
          var nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/;
          if (nameRegex.test(name)) {
              _name = name;
          } else {
              throw new Error("Invalid name format!");
          }
      }
  });

  Object.defineProperty(this, "gender", {
      get: function() {
          return _gender;
      },
      set: function(gender) {
          _gender = gender;
      }
  });

  Object.defineProperty(this, "department", {
      get: function() {
          return _department;
      },
      set: function(department) {
          _department = department;
      }
  });

  Object.defineProperty(this, "salary", {
      get: function() {
          return _salary;
      },
      set: function(salary) {
          if (salary > 0) {
              _salary = salary;
          } else {
              throw new Error("Salary must be a positive number!");
          }
      }
  });

  Object.defineProperty(this, "startDate", {
      get: function() {
          return _startDate;
      },
      set: function(startDate) {
          _startDate = startDate;
      }
  });

  Object.defineProperty(this, "notes", {
      get: function() {
          return _notes;
      }
  });
}

const salaryRange = document.getElementById('salary');
const salaryOutput = document.querySelector('.salary-output');

salaryRange.addEventListener('input', function() {
  salaryOutput.textContent = salaryRange.value;
});