import { useEffect, useState } from "react";
import { getFeatureFlags, saveFeatureFlags } from "../services/featureFlagService";

type FeatureFlags = {
  newDashboard: boolean;
  transferMoney: boolean;
  aiAssistant: boolean;
};

function FeatureFlags() {
  const [flags, setFlags] = useState<FeatureFlags | null>(null);

  useEffect(() => {
    async function loadFlags() {
      const data = await getFeatureFlags();
      setFlags(data);
    }

    loadFlags();
  }, []);

  async function handleSave() {
    if (!flags) return;

    try {
      await saveFeatureFlags(flags);

      alert("Feature flags saved successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to save feature flags.");
    }
  }

  if (!flags) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Feature Flag Management</h1>

      <label>
        <input
          type="checkbox"
          checked={flags.newDashboard}
          onChange={() =>
            setFlags({
              ...flags,
              newDashboard: !flags.newDashboard,
            })
          }
        />
        New Dashboard
      </label>

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          checked={flags.transferMoney}
          onChange={() =>
            setFlags({
              ...flags,
              transferMoney: !flags.transferMoney,
            })
          }
        />
        Transfer Money
      </label>

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          checked={flags.aiAssistant}
          onChange={() =>
            setFlags({
              ...flags,
              aiAssistant: !flags.aiAssistant,
            })
          }
        />
        AI Assistant
      </label>

      <br />
      <br />

      <button
        onClick={handleSave}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Save Changes
      </button>
    </div>
  );
}

export default FeatureFlags;
