export function calculateLevel(xp = 0) {
  if (xp < 100) return 1;
  if (xp < 200) return 2;
  if (xp < 350) return 3;
  return 4;
}

export function getLevelProgress(xp = 0) {
  const levels = [
    { min: 0, max: 100 },
    { min: 100, max: 200 },
    { min: 200, max: 350 },
    { min: 350, max: Infinity },
  ];

  const levelIndex = levels.findIndex(
    (l) => xp >= l.min && xp < l.max
  );

  const current = levels[levelIndex];

  const progress =
    current.max === Infinity
      ? 100
      : ((xp - current.min) / (current.max - current.min)) * 100;

  return {
    level: levelIndex + 1,
    progress,
  };
}