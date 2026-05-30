import organizationData from "../data/organization.json";
import type { Role } from "../interfaces/Employee";

export default function Organization() {
  const members: Role[] = organizationData as Role[];

  return (
    <main>
      <h2>Organization</h2>
      {members.map((member) => (
        <section key={`${member.firstName}-${member.lastName}`} className="org-row">
          <span>{member.firstName} {member.lastName}</span>
          <span>{member.role}</span>
        </section>
      ))}
    </main>
  );
}