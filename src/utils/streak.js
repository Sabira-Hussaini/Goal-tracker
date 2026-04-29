export function calculateStreak(events = []) {
  if (!events.length) return 0;

 
  const days = [
    ...new Set(events.map((e) => e.date))
  ].sort();

  let streak = 1;

  
  for (let i = days.length - 1; i > 0; i--) {
    const current = new Date(days[i]);
    const prev = new Date(days[i - 1]);

    const diff =
      (current - prev) / (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}