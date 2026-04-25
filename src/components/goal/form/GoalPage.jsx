import RequiredInput from "./RequiredInput";

export default function GoalPage() {
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (newGoal) => {
    setGoals((prev) => [...prev, newGoal]);
  };

  return (
    <>
      <RequiredInput onAddGoal={handleAddGoal} />
      {goals.map((goal, index) => (
        <div key={index}>
          <h3>{goal.title}</h3>
          <p>{goal.category}</p>
        </div>
      ))}
    </>
  );
}
