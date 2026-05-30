import { useState } from "react";
import departments from "../data/employees.json";
import type { Department } from "../interfaces/Employee";
import AddEmployeeForm from "./AddEmployeeForm";

function Main() {
  const [departmentList, setDepartmentList] = useState<Department[]>(departments as Department[]);

  function handleAddEmployee(
    firstName: string,
    lastName: string,
    departmentName: string
  ) {
    setDepartmentList((prev) =>
      prev.map((dept) =>
        dept.name === departmentName
          ? { ...dept, employees: [...dept.employees, { firstName, lastName }] }
          : dept
      )
    );
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