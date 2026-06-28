import { useState } from "react";
import type { Role } from "../interfaces/Employee";
import organizationRepo from "../repositories/organizationRepo";
import organizationService from "../services/organizationService";
import AddRoleForm from "./AddRoleForm";

export default function Organization() {
  const [members, setMembers] = useState<Role[]>(
    () => organizationRepo.getMembers()
  );
  const [roleError, setRoleError] = useState<string[]>([]);

  function handleAddMember(
    firstName: string,
    lastName: string,
    role: string
  ) {
    const result = organizationService.createMember(firstName, lastName, role);

    if (result.success && result.members) {
      setMembers(result.members);
      setRoleError([]);
    } else {
      setRoleError(result.errors?.role ?? []);
    }
  }

  return (
    <main>
      <h2>Organization</h2>
      {members.map((member) => (
        <section key={`${member.firstName}-${member.lastName}`} className="org-row">
          <span>{member.firstName} {member.lastName}</span>
          <span>{member.role}</span>
        </section>
      ))}

      <AddRoleForm onAddMember={handleAddMember} roleMessages={roleError} />
    </main>
  );
}