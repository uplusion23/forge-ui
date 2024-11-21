export const styles = [
  {
    name: "default",
    label: "Default",
  },
  {
    name: "austin",
    label: "Austin",
  },
] as const

export type Style = (typeof styles)[number]
