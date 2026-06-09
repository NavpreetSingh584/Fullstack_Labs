import { useState } from "react";
import type { Department } from "../interfaces/Employee";
import employeeRepo from "../repositories/employeeRepo";
import employeeService from "../services/employeeService";
import AddEmployeeForm from "./AddEmployeeForm";

function Main() {
  const [departmentList, setDepartmentList] = useState<Department[]>(
    () => employeeRepo.getDepartments()
  );

  function handleAddEmployee(
    firstName: string,
    lastName: string,
    departmentName: string
  ) {
    const result = employeeService.createEmployee(firstName, lastName, departmentName);

    if (result.success && result.departments) {
      setDepartmentList(result.departments);
    } else {
      console.error("Failed to add employee:", result.errors);
    }
  }

  return (
    <main>
      <h2>Departments</h2>
      {departmentList.map((department) => (
        <section key={department.name}>
          <h3>{department.name}</h3>
          {department.employees.map((employee) => (
            <p key={`${employee.firstName}-${employee.lastName}`}>
              {employee.firstName} {employee.lastName}
            </p>
          ))}
        </section>
      ))}

      <AddEmployeeForm
        departments={departmentList}
        onAddEmployee={handleAddEmployee}
      />
    </main>
  );
}

export default Main;