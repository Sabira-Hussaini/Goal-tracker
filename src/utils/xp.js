export function calculateXP(events = []) {
  let xp = 0;

  for (const event of events) {
    if (event.type === "CREATE_GOAL") xp += 5;
    if (event.type === "COMPLETE_GOAL") xp += 20;
  }

  return xp;
}