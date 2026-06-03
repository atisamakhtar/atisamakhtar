export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const values: ValueItem[] = [
  {
    id: "quality",
    title: "Quality First",
    description:
      "Every line of code is typed, tested, and reviewed. I don't ship until it works flawlessly on mobile, tablet, and desktop.",
    icon: "★",
  },
  {
    id: "communication",
    title: "Clear Communication",
    description:
      "Weekly updates, shared Figma links, and honest timelines. You'll always know where your project stands—no surprises.",
    icon: "◆",
  },
  {
    id: "performance",
    title: "Speed & Performance",
    description:
      "Fast load times aren't optional. I optimize images, bundles, and APIs so your users stay engaged and Google ranks you higher.",
    icon: "⚡",
  },
  {
    id: "partnership",
    title: "Long-Term Partnership",
    description:
      "Many clients return for v2 features and maintenance. I document everything so your team can scale after handoff.",
    icon: "♥",
  },
];
