const EmployeeList = ({ employees, onEdit, onDelete }) => {
  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <div className="card">
      <p className="card-title">
        <span>📋</span> All Employees
      </p>

      {employees.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🗂️</div>
          <p>No employees yet. Add one using the form.</p>
        </div>
      ) : (
        <div className="emp-table-wrap">
          <p className="emp-count">
            {employees.length} employee{employees.length !== 1 ? "s" : ""}
          </p>
          <table className="emp-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>
                    <div className="emp-name-cell">
                      <div className="emp-avatar">{getInitials(emp.name)}</div>
                      {emp.name}
                    </div>
                  </td>
                  <td>
                    <span className="role-badge">{emp.role}</span>
                  </td>
                  <td>
                    <div className="emp-actions">
                      <button
                        className="btn btn-edit-sm"
                        onClick={() => onEdit(emp)}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className="btn btn-danger-sm"
                        onClick={() => onDelete(emp.id)}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;