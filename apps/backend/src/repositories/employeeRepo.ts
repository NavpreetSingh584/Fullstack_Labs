import type { Department, Employee } from "../types";
import initialData from "../data/employees.json";

let departments: Department[] = initialData as Department[];

const employeeRepo = {
  getDepartments(): Department[] {
    return departments.map((dept) => ({
      ...dept,
      employees: [...dept.employees],
    }));
  },

  getDepartmentByName(name: string): Department | undefined {
    return departments.find((dept) => dept.name === name);
  },

  createEmployee(
    firstName: string,
    lastName: string,
    departmentName: string
  ): Department[] | null {
    const dept = departments.find((d) => d.name === departmentName);
    if (!dept) return null;

    const newEmployee: Employee = { firstName, lastName };

    departments = departments.map((d) =>
      d.name === departmentName
        ? { ...d, employees: [...d.employees, newEmployee] }
        : d
    );

    return employeeRepo.getDepartments();
  },
};

export default employeeRepo;