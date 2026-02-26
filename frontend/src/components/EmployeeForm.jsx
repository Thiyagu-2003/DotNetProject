import { useState, useEffect } from "react";

const EmployeeForm = ({ onSubmit, selectedEmployee, clearSelection }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (selectedEmployee) {
      setName(selectedEmployee.name);
      setRole(selectedEmployee.role);
    } else {
      setName("");
      setRole("");
    }
  }, [selectedEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, role });
    setName("");
    setRole("");
  };

  const isEditing = Boolean(selectedEmployee);

  return (
    <div className="card">
      <p className="card-title">
        <span>{isEditing ? "✏️" : "➕"}</span>
        {isEditing ? "Edit Employee" : "Add Employee"}
      </p>

      <form className="emp-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="emp-name">Full Name</label>
          <input
            id="emp-name"
            type="text"
            placeholder="e.g. John Smith"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="emp-role">Role</label>
          <input
            id="emp-role"
            type="text"
            placeholder="e.g. Software Engineer"
            value={role}
            required
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {isEditing ? "💾 Save Changes" : "➕ Add Employee"}
          </button>
          {isEditing && (
            <button
              type="button"
              className="btn btn-ghost"
              onClick={clearSelection}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;