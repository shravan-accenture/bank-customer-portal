export async function getFeatureFlags() {
  const response = await fetch("http://localhost:3000/feature-flags");

  if (!response.ok) {
    throw new Error("Failed to fetch feature flags");
  }

  return response.json();
}