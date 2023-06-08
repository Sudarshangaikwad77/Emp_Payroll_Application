
function EmployeePayroll(name, gender, department, salary, startDate, notes) {
  var _name = name;
  var _gender = gender;
  var _department = department;
  var _salary = salary;
  var _startDate = startDate;
  var _notes = notes;

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
      var currentDate = new Date();
      var joiningDate = new Date(startDate);
      var thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(currentDate.getDate() - 30);

      if (joiningDate > currentDate) {
        throw new Error("Start date cannot be a future date!");
      } else if (joiningDate < thirtyDaysAgo) {
        throw new Error("Start date should be within 30 days of joining!");
      } else {
        _startDate = startDate;
      }
    }
  });

  Object.defineProperty(this, "notes", {
    get: function() {
      return _notes;
    },
    set: function(notes) {
      _notes = notes;
    }
  });
}
