window.addEventListener('DOMContentLoaded', (event) =>{
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>";
     const innerHtml = `${headerHtml}`;
     let empPayrollList = createEmployeePayrollJSON();
     for (const empPayrollData of empPayrollList){
        innerHtml =`${innerHtml}
        <tr>
         <td><img class="profile" alt="" src="${empPayrollData._profile}"></td>
         <td>${empPayrollData._name}</td>
         <td>${empPayrollData._gender}</td>
         <td>${getDeptHtml(empPayrollData._department)}</td>
         <td>${empPayrollData._salary}</td>
         <td>${empPayrollData._startDate}</td> 
         <td>
           <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete"
              src="">
           <img id="${empPayrollData._id}" alt="edit" onclick="update(this)"
              src="">
         </td>               
        </tr>
        `;
     }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Saket jain',
            _gender: 'male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '5000000',
            _startDate: '1 April 2021',
            _note: '',
            _id: new Date().getTime() ,
            _profile: '../assets/Ellipse -2.png'
        },
        {
            _name: 'Ayushi jain',
            _gender: 'female',
            _department: [
                'Sales',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '7 April 2021',
            _note: '',
            _id: new Date().getTime() + 1,
            _profile: '../assets/Ellipse -1.png' 
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

