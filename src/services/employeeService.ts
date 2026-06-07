import type { Department } from "../interfaces/Employee";
import employeeRepo from "../repositories/employeeRepo";

export interface CreateEmployeeResult {
  success: boolean;
  departments?: Department[];
  errors?: {
    firstName?: string[];
    department?: string[];
  };
}

const employeeService = {
  createEmployee(
    firstName: string,
    lastName: string,
    departmentName: string
  ): CreateEmployeeResult {
    const errors: CreateEmployeeResult["errors"] = {};

    // Validation 1: department must exist
    const department = employeeRepo.getDepartmentByName(departmentName);
    if (!department) {
      errors.department = [`Department "${departmentName}" does not exist.`];
    }

    // Validation 2: first name must be at least 3 characters
    if (firstName.trim().length < 3) {
      errors.firstName = ["First name must be at least 3 characters."];
    }

    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }

    const updatedDepartments = employeeRepo.createEmployee(
      firstName.trim(),
      lastName.trim(),
      departmentName
    );

    if (!updatedDepartments) {
      return {
        success: false,
        errors: { department: ["Failed to add employee to department."] },
      };
    }

    return { success: true, departments: updatedDepartments };
  },
};

export default employeeService;