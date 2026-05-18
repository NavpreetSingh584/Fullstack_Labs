import departments from "../data/employees.json";
import type { Department } from "../interfaces/Employee";

function Main() {
  const departmentList: Department[] = departments;

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
    </main>
  );
}

export default Main;