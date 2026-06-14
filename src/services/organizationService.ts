import type { Role } from "../interfaces/Employee";
import organizationRepo from "../repositories/organizationRepo";

export interface CreateMemberResult {
  success: boolean;
  members?: Role[];
  errors?: {
    firstName?: string[];
    role?: string[];
  };
}

const organizationService = {
  createMember(
    firstName: string,
    lastName: string,
    role: string
  ): CreateMemberResult {
    const errors: CreateMemberResult["errors"] = {};

    // Validation 1: first name must be at least 3 characters
    if (firstName.trim().length < 3) {
      errors.firstName = ["First name must be at least 3 characters."];
    }

    // Validation 2: role must not already be occupied
    const existingRole = organizationRepo.getRoleByName(role.trim());
    if (existingRole) {
      errors.role = [`The role "${role}" is already occupied.`];
    }

    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }

    const updatedMembers = organizationRepo.createMember(
      firstName.trim(),
      lastName.trim(),
      role.trim()
    );

    return { success: true, members: updatedMembers };
  },
};

export default organizationService;