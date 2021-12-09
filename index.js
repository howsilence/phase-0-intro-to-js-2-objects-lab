const employee = {};
employee["name"] = "Bob";
employee["address"] = "69-69 69th street";
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployeeObject = {...employee}
    newEmployeeObject[key] = value;
    return newEmployeeObject
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value;
   return employee
};
function deleteFromEmployeeByKey(employee, key) {
    const newEmp = {...employee};
    delete newEmp[key];
    return newEmp
};
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}