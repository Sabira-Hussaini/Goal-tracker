import { createContext, useState, useEffect } from "react";
import { getGoals, saveGoals } from "../utils/storage";

export const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState(() => getGoals() || []);
  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : [];
  });

  useEffect(() => {
    saveGoals(goals);
  }, [goals]);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (type, goalId = null) => {
    const newEvent = {
      id: Date.now(),
      type,
      goalId,
      date: new Date().toISOString().split("T")[0],
    };

    setEvents((prev) => [...prev, newEvent]);
  };

  const addGoal = (goal) => {
    const newGoal = {
      ...goal,
      id: goal.id || Date.now(),
      status: goal.status || "active",    };

    setGoals((prev) => [...prev, newGoal]);
    addEvent("CREATE_GOAL", newGoal.id);
  };

  const updateGoal = (id, updatedGoal) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? updatedGoal : g))
    );
  };

  const deleteGoal = (id) => {
    setGoals((prev) => prev.filter((g) => g.id !== id));
    addEvent("DELETE_GOAL", id);
  };
  const updateGoalStatus = (id, status) => {
    setGoals((prev) =>
      prev.map((g) =>
        g.id === id
          ? { ...g, status: status.toLowerCase() }
          : g
      )
    );

    addEvent("UPDATE_STATUS", id);
  };

  return (
    <GoalContext.Provider
      value={{
        goals,
        events,
        addGoal,
        updateGoal,
        deleteGoal,
        addEvent,
        updateGoalStatus,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
};