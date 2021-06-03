window.addEventListener('DOMContentLoaded', (event) =>{
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>";
     const innerHtml = `${headerHtml}`;
     let empPayrollList = createEmployeePayrollJSON();
     for(const empPayrollData of empPayrollList){
     innerHtml =`${innerHtml}
    <tr>
      <td><img class="profile" alt="" src="${empPayrollData._profile}"></td>
      <td>Saket Jain</td>
      <td>Male</td>
      <td><div class="dept-label">HR</div>
         <div class="dept-label">Finance</div></td>
      <td>300000</td>
      <td>1 April 2021</td> 
      <td>
        <img id="1" onclick="remove(this)" alt="delete"
              src="">
        <img id="1" alt="edit" onclick="update(this)"
              src="">
      </td>               
    </tr>
    `;
     }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let empPatrollListLocal = [
        {
            _name: 'Saket jain',
            _gender: 'male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: 5000000,
            _startDate: '1 April 2021',
            _note: '',
            _id: new Date().getTime() +1,
            _profile: '../assets/../assets/Ellipse -2.png'

        }
    ]
}

