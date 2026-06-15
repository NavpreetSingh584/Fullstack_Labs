import type { Role } from "../interfaces/Employee";
import initialData from "../data/organization.json";

let members: Role[] = initialData as Role[];

const organizationRepo = {
  getMembers(): Role[] {
    return [...members];
  },

  getRoleByName(role: string): Role | undefined {
  return members.find(
    (m) => m.role.toLowerCase() === role.trim().toLowerCase()
  );
},

  createMember(
    firstName: string,
    lastName: string,
    role: string
  ): Role[] {
    const newMember: Role = { firstName, lastName, role };
    members = [...members, newMember];
    return organizationRepo.getMembers();
  },
};

export default organizationRepo;