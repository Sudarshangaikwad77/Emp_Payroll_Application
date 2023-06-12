window. addEventListener('DOMContentLoaded', (event) => {
  createInnerHtml();
});
const createInnerHtml = () => {
 const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" + "<th>Salary</th><th>Start Date</th><th>Actions</th>";
 let innerHtml = `${headerHtml}`;
 let empPayrollList = creteEmployeePayrollJSON();
 for (const empPayrollData of empPayrollList) {
  innerHtml = `${innerHtml}
 <tr>
      <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
      <td>${empPayrollData._name}</td>
      <td>${empPayrollData._gender}</td>
      <td>${getDeptHtml(empPayrollData._department)}</td>
      <td>${empPayrollData._salary}</td>
      <td>${empPayrollData._startDate}</td>
      <td>
          <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="delete-black-18dp.svg">
          <img id="${empPayrollData._id}" alt="edit" onclick="update(this)" src="create-black-18dp.svg">
      </td>
 </tr>
 `;
 }
 document.querySelector("#table-display").innerHTML = innerHtml;
 }

 const getDeptHtml = (deptList) => {
     let deptHtml = '';
     for (const dept of deptList) {
         deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
     }
     return deptHtml;
 }

 const creteEmployeePayrollJSON = () => {
     let empPayrollListLocal = [
     {
     _name: 'Kanishk Singhal',
     _gender: 'male',
     _department: [
     'Engineering',
     'Finance'
     ],
     _salary: '500000',
     _startDate: '29 Oct 2022',
     _note: '',
     _id: new Date().getTime(),
     _ProfilePic: 'Ellipse -2.png'
 },
 {
     _name: 'Harsh Agrawal',
     _gender: 'male',
     _department: [
         'Engineering',
         'Finance'
     ],
     _salary: '800000',
     _startDate: '06 Mar 2022',
     _note: '',
     _id: new Date().getTime() + 1,
     _ProfilePic: 'Ellipse -9.png'
 }
     ];
     return empPayrollListLocal;
 }