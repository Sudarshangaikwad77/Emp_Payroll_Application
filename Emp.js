function populateEmployeeData() {
    let name = document.getElementById("name").value;
    let profile = document.querySelector("input[name='profile']:checked").value;
    let gender = document.querySelector("input[name='gender']:checked").value;
    let departments = [];
    let departmentCheckboxes = document.querySelectorAll("input[name='department']:checked");
    departmentCheckboxes.forEach(function(checkbox) {
      departments.push(checkbox.value);
    });
    let salary = document.getElementById("salary").value;
    let startDate = document.getElementById("day").value + "-" + document.getElementById("month").value + "-" + document.getElementById("year").value;
    let notes = document.getElementById("notes").value;
    let employeeData = new EmployeePayrollData(name, profile, gender, departments, salary, startDate, notes);
    if (employeeData.validateData()) {
      console.log("Employee Data:", employeeData);
    } else {
      console.log("Validation Error: Invalid employee data");
    }
  }  
