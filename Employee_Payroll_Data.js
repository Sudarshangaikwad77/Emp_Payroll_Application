
class EmployeePayrollData {
  constructor(name, profile, gender, departments, salary, startDate, notes) {
    this._name = name;
    this._profile = profile;
    this._gender = gender;
    this._departments = departments;
    this._salary = salary;
    this._startDate = startDate;
    this._notes = notes;
  }
  get name() {
      return this._name;
    }
    get Profile() {
      return this._profile;
    }
  
    get Gender() {
      return this._gender;
    }
  
    get Departments() {
      return this._departments;
    }
  
    get Salary() {
      return this._salary;
    }
  
    get StartDate() {
      return this._startDate;
    }
  
    get Notes() {
      return this._notes;
    }
  
    set name(name) {
      let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
      if (nameRegex.test(name)) {
        this._name = name;
      } else {
        throw "Name is incorrect!";
      }
    }
    set Profile(profile) {
      this._profile = profile;
    }
  
    set Gender(gender) {
      this._gender = gender;
    }
  
    set Departments(departments) {
      this._departments = departments;
    }
  
    set Salary(salary) {
      this._salary = salary;
    }
  
    set StartDate(startDate) {
      let currentDate = new Date();
      let joinDate = new Date(startDate);
  
      if (joinDate > currentDate) {
        throw new Error("Start date cannot be a future date");
      }
  
      let thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
      if (joinDate < thirtyDaysAgo) {
        throw new Error("Start date should be within 30 days of joining");
      }
  
      this._startDate = startDate;
    }
  
    set Notes(notes) {
      this._notes = notes;
    }
    
    toString() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const empDate = !this.startDate ? "undefined":
      this.startDate. toLocaleDateString("en-US", options);
      return "id=" + this.id +", name='" + this.name +", gender='" + this.gender +
      ", profilePic='" + this.profilePic + ", department=" + this.department +
       ",salary=" + this.salary +", startDate=" + empDate + ", note="+ this.note; 
    }
  }
