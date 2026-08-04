import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
        gap: "20px",
      }}
    >
      <h1>🏦 Bank Customer Portal</h1>

      <h2>Login As</h2>

      <button onClick={() => navigate("/admin")} style={{ padding: "10px 20px", width: "200px" }}>
        Admin
      </button>

      <button
        onClick={() => navigate("/customer")}
        style={{ padding: "10px 20px", width: "200px" }}
      >
        Customer
      </button>
    </div>
  );
}

export default Login;
