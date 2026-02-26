import { useEffect, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "./services/api";

function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await getEmployees();
      setEmployees(res.data);
    } catch {
      setError("Could not reach the API. Make sure the backend is running on port 5282.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchEmployees(); }, []);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");
      if (selectedEmployee) {
        await updateEmployee(selectedEmployee.id, data);
      } else {
        await addEmployee(data);
      }
      setSelectedEmployee(null);
      await fetchEmployees();
    } catch {
      setError("Operation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      setError("");
      await deleteEmployee(id);
      await fetchEmployees();
    } catch {
      setError("Delete failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <div className="logo-icon">👥</div>
        <h1>EmpTrack</h1>
        <span className="subtitle">Employee Management System</span>
      </header>

      <main className="app-body">
        {loading && (
          <div className="status-bar loading">
            <div className="spinner" />
            Processing…
          </div>
        )}
        {error && !loading && (
          <div className="status-bar error">
            ⚠️ {error}
          </div>
        )}

        <EmployeeForm
          onSubmit={handleSubmit}
          selectedEmployee={selectedEmployee}
          clearSelection={() => setSelectedEmployee(null)}
        />

        <EmployeeList
          employees={employees}
          onEdit={setSelectedEmployee}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default App;