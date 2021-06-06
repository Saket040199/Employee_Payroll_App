let employeePayrollList;
window.addEventListener('DOMContentLoaded', (event) =>{
    employeePayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList')?
                        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {
    
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>";
     let innerHtml = `${headerHtml}`;
     if(employeePayrollList.length == 0) return;
     for (const empPayrollData of employeePayrollList){
        innerHtml =`${innerHtml}
        <tr>
         <td><img class="profile" alt="" src="${empPayrollData._profile}"></td>
         <td>${empPayrollData._name}</td>
         <td>${empPayrollData._gender}</td>
         <td>${getDeptHtml(empPayrollData._department)}</td>
         <td>${empPayrollData._salary}</td>
         <td>${stringifyDate(empPayrollData._startDate)}</td> 
         <td>
           <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete"
              src="../assets/outline_remove_circle_black_24dp.png">
           <img id="${empPayrollData._id}" alt="edit" onclick="update(this)"
              src="../assets/outline_edit_black_24dp.png">
         </td>               
        </tr>
        `;
     }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const remove = (node) => {
    let empPayrollData = employeePayrollList.find(empData => empData._id == node.id);
    if(!empPayrollData) return;
    const index = employeePayrollList
                  .map(empData => empData._id)
                  .indexOf(empPayrollData._id);
    employeePayrollList.splice(index, 1);
    localStorage.setItem('EmployeePayrollList', JSON.stringify(employeePayrollList));
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
    window.location.replace(site_properties.home_page);
}

