import { ReactNode, useContext } from "react";
import { FeatureContext } from "./FeatureContext";

export const useFeature = (name: string) => {
  const features = useContext(FeatureContext);
  const feature = features.find((f) => f.name === name);
  if (feature === undefined) return false;
  return feature.enabled;
};
export type FeatureChildProps = (flag: boolean) => ReactNode;
export type FeatureProps = { name: string; children: FeatureChildProps };

export const Feature = ({ name, children }: FeatureProps) => {
  const flag = useFeature(name);
  return <>{children(flag)}</>;
};
