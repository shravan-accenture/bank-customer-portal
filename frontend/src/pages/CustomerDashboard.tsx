import { useEffect, useState } from "react";
import { getFeatureFlags } from "../services/featureFlagService";

type FeatureFlags = {
  newDashboard: boolean;
  transferMoney: boolean;
  aiAssistant: boolean;
};

function CustomerDashboard() {
  const [flags, setFlags] = useState<FeatureFlags | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeatureFlags() {
      try {
        const data = await getFeatureFlags();
        setFlags(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadFeatureFlags();
  }, []);

  if (loading) {
    return <h2>Loading feature flags...</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>🏦 Customer Dashboard</h1>

      {flags?.newDashboard ? (
        <div
          style={{
            padding: "20px",
            background: "#dff6ff",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          <h2>✨ New Dashboard Enabled</h2>
          <p>This layout is available because the feature flag is ON.</p>
        </div>
      ) : (
        <div
          style={{
            padding: "20px",
            background: "#f5f5f5",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          <h2>Classic Dashboard</h2>
          <p>This is the current production dashboard.</p>
        </div>
      )}

      <hr />

      <h3>Available Features</h3>

      <ul>
        <li>
          Transfer Money:{" "}
          {flags?.transferMoney ? "✅ Enabled" : "❌ Disabled"}
        </li>

        <li>
          AI Assistant:{" "}
          {flags?.aiAssistant ? "✅ Enabled" : "❌ Disabled"}
        </li>
      </ul>
    </div>
  );
}

export default CustomerDashboard;