export async function getFeatureFlags() {
  const response = await fetch("http://localhost:3000/feature-flags");

  if (!response.ok) {
    throw new Error("Failed to fetch feature flags");
  }

  return response.json();
}

export async function saveFeatureFlags(flags: {
  newDashboard: boolean;
  transferMoney: boolean;
  aiAssistant: boolean;
}) {
  const response = await fetch("http://localhost:3000/feature-flags", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(flags),
  });

  if (!response.ok) {
    throw new Error("Failed to save feature flags");
  }

  return response.json();
}
