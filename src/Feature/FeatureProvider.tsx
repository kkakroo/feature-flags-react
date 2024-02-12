import { FeatureContext, type Feature } from "./FeatureContext";
import { type PropsWithChildren } from "react";

export type FeatureProviderProps = PropsWithChildren<{
  features: Feature[];
}>;

export const FeatureProvider = ({
  features,
  children,
}: FeatureProviderProps) => {
  return (
    <FeatureContext.Provider value={features}>
      {children}
    </FeatureContext.Provider>
  );
};
