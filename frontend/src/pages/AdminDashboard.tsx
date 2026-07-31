import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h1>🛠 Admin Dashboard</h1>

      <button
        onClick={() => navigate("/admin/feature-flags")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
        }}
      >
        Manage Feature Flags
      </button>
    </div>
  );
}

export default AdminDashboard;