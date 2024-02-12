import { ChangeEvent, useState } from "react";
import App from "./App";
import { FeatureProvider } from "./Feature/FeatureProvider";
import { Feature } from "./Feature/FeatureContext";

export const ToggleFeatures = () => {
  const [features, setFeatues] = useState<Feature[]>([
    { name: "doubleStepCount", enabled: false },
    { name: "newLogo", enabled: false },
  ]);
  const getUpdatedFeatures = (
    features: Feature[],
    name: string,
    flag: boolean,
  ) => {
    if (features.length === 0) return [];
    const feat = Array.from(features);
    return feat.map((f) => (f.name === name ? { ...f, enabled: flag } : f));
  };
  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    setFeatues(getUpdatedFeatures(features, name, e.target.checked));
  };
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <label>Feature: Double Step Count</label>
        <input
          type="checkbox"
          onChange={(e) => onCheckboxChange(e, "doubleStepCount")}
        />
        <br />
        <label>Feature: Add New Logo</label>
        <input
          type="checkbox"
          onChange={(e) => onCheckboxChange(e, "newLogo")}
        />
      </div>
      {/* Features can be fetched from database */}
      <FeatureProvider features={features}>
        <App />
      </FeatureProvider>
    </>
  );
};
