export const styles = [
  {
    name: "default",
    label: "Default",
  },
  {
    name: "austin",
    label: "Austin",
  },
  {
    name: "dc",
    label: "D.C.",
  },
] as const;

export type Style = (typeof styles)[number];
