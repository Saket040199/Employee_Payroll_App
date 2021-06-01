window.addEventListener('DOMContentLoaded', (event) =>{

    const salary=document.querySelector('#salary');
    const output=document.querySelector('.salary-output');
       output.textContent = salary.value;
    salary.addEventListener('input', function(){
       output.textContent = salary.value;
    });

    const name=document.querySelector('#name');
    const textError=document.querySelector('.error-text-output');
    name.addEventListener('input', function(){
        if (name.value.length==0){
            textError.textContent="";
            return;
        }
        try{
           (new EmployeePayRoll()).name = name.value;
           textError.textContent = "";
        }catch (e){
            textError.textContent = e;
        }
    });
});  

const save = () => {
    try{
        let employeePayrollData = cretaeEmployeePayroll();
    } catch (e){
        return;
    }
}

const cretaeEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayRoll();
    try{
        employeePayrollData.name = getInputValueById('#name');
    }catch (e){
        setTextValue ('.error-text-output',e);
    }
    employeePayrollData.profile = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.notes = getInputValueById('#notes');
    let date= getInputValueById('#day')+ " "+getInputValueById('#month')+
              " "+ getInputValueById('#year');
    employeePayrollData.startDate= Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
