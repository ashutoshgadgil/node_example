const empModule = require('./empModule');

//console.log(empModule.emps());

for(let emp of empModule.emps())
{
    console.log(emp.empId," ",emp.empName," ",emp.empSalary);
}