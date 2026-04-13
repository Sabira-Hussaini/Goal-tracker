export const getGoals = () => {
  const data = localStorage.getItem("goals");
  return data ? JSON.parse(data) : [];
};

export const saveGoals = (goals) => {
  localStorage.setItem("goals", JSON.stringify(goals));
};