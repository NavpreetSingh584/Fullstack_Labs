import { useFormInput } from "../hooks/useFormInput";

interface Props {
  onAddMember: (firstName: string, lastName: string, role: string) => void;
  roleMessages: string[];
}

export default function AddRoleForm({ onAddMember, roleMessages }: Props) {
  const firstNameInput = useFormInput("");
  const lastNameInput = useFormInput("");
  const roleInput = useFormInput("");

  function handleSubmit() {
    const firstNameErrors = firstNameInput.validate((value) =>
      value.trim().length < 3
        ? ["First name must be at least 3 characters."]
        : []
    );

    if (firstNameErrors.length > 0) return;

    onAddMember(
      firstNameInput.value.trim(),
      lastNameInput.value.trim(),
      roleInput.value.trim()
    );

    firstNameInput.reset();
    lastNameInput.reset();
    roleInput.reset();
  }

  return (
    <div>
      <h2>Add New Role</h2>

      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={firstNameInput.value}
          onChange={firstNameInput.onChange}
        />
        {firstNameInput.messages.map((msg, i) => (
          <p key={i} style={{ color: "red" }}>{msg}</p>
        ))}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={lastNameInput.value}
          onChange={lastNameInput.onChange}
        />
      </div>

      <div>
        <label htmlFor="role">Role</label>
        <input
          id="role"
          type="text"
          value={roleInput.value}
          onChange={roleInput.onChange}
        />
        {roleMessages.map((msg, i) => (
          <p key={i} style={{ color: "red" }}>{msg}</p>
        ))}
      </div>

      <button onClick={handleSubmit}>Add Role</button>
    </div>
  );
}