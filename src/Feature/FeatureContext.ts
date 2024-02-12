import { createContext } from "react";

export type Feature = {
  name: string;
  enabled: boolean;
};
export const FeatureContext = createContext<Feature[]>([]);
