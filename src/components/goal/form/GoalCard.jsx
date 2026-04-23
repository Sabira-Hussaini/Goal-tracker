export default function GoalCard({ goal }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded">
      <h2 className="text-xl font-bold">{goal.title}</h2>
      <p>{goal.category}</p>
      <p>{goal.goalType}</p>
      <p>
        {goal.target} {goal.session}
      </p>
      <p>Priority: {goal.priority}</p>
    </div>
  );
}
