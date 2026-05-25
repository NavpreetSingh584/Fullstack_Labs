import { useState } from "react";
import type { Department } from "../interfaces/Employee";

interface Props {
  departments: Department[];
  onAddEmployee: (
    firstName: string,
    lastName: string,
    departmentName: string
  ) => void;
}

export default function AddEmployeeForm({ departments, onAddEmployee }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState(departments[0].name);
  const [errors, setErrors] = useState<string[]>([]);

  function handleSubmit() {
    setErrors([]);
    const newErrors: string[] = [];

    if (firstName.trim().length < 3) {
      newErrors.push("First name must be at least 3 characters.");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    onAddEmployee(firstName.trim(), lastName.trim(), department);
    setFirstName("");
    setLastName("");
    setDepartment(departments[0].name);
  }

  return (
    <div>
      <h2>Add New Employee</h2>

      {errors.length > 0 && (
        <ul>
          {errors.map((err, i) => (
            <li key={i} style={{ color: "red" }}>{err}</li>
          ))}
        </ul>
      )}

      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="department">Department</label>
        <select
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          {departments.map((dept, i) => (
            <option key={i} value={dept.name}>
              {dept.name}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleSubmit}>Add Employee</button>
    </div>
  );
}