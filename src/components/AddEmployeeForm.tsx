import type { Department } from "../interfaces/Employee";
import { useFormInput } from "../hooks/useFormInput";

interface Props {
  departments: Department[];
  onAddEmployee: (
    firstName: string,
    lastName: string,
    departmentName: string
  ) => void;
}

export default function AddEmployeeForm({ departments, onAddEmployee }: Props) {
  const firstNameInput = useFormInput("");
  const lastNameInput = useFormInput("");
  const departmentInput = useFormInput(departments[0]?.name ?? "");

  function handleSubmit() {
    const firstNameErrors = firstNameInput.validate((value) =>
      value.trim().length < 3
        ? ["First name must be at least 3 characters."]
        : []
    );

    if (firstNameErrors.length > 0) return;

    onAddEmployee(
      firstNameInput.value.trim(),
      lastNameInput.value.trim(),
      departmentInput.value
    );

    firstNameInput.reset();
    lastNameInput.reset();
    departmentInput.reset(departments[0]?.name ?? "");
  }

  return (
    <div>
      <h2>Add New Employee</h2>

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
        {lastNameInput.messages.map((msg, i) => (
          <p key={i} style={{ color: "red" }}>{msg}</p>
        ))}
      </div>

      <div>
        <label htmlFor="department">Department</label>
        <select
          id="department"
          value={departmentInput.value}
          onChange={departmentInput.onChange}
        >
          {departments.map((dept) => (
            <option key={dept.name} value={dept.name}>
              {dept.name}
            </option>
          ))}
        </select>
        {departmentInput.messages.map((msg, i) => (
          <p key={i} style={{ color: "red" }}>{msg}</p>
        ))}
      </div>

      <button onClick={handleSubmit}>Add Employee</button>
    </div>
  );
}