import { createContext, useState, useEffect } from "react";
import { getGoals, saveGoals } from "../utils/storage";

export const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState(() => getGoals() || []);
  const [events, setEvents] = useState(() => {
    const stored = localStorage.getItem("events");
    return stored ? JSON.parse(stored) : [];
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
      date: new Date().toISOString(),
    };

    setEvents((prev) => [...prev, newEvent]);
  };

  const addGoal = (goal) => {
    const newGoal = {
      ...goal,
      id: goal.id || Date.now(),
      status: goal.status || "active",
    };

    setGoals((prev) => [...prev, newGoal]);
    addEvent("CREATE_GOAL", newGoal.id);
  };

  const deleteGoal = (id) => {
    setGoals((prev) => prev.filter((g) => g.id !== id));
    addEvent("DELETE_GOAL", id);
  };

  // ✅ FIXED: THIS is what was breaking XP
  const updateGoalStatus = (id, status) => {
    const normalized = status.toLowerCase();

    setGoals((prev) =>
      prev.map((g) =>
        g.id === id ? { ...g, status: normalized } : g
      )
    );

    if (normalized === "completed") {
      addEvent("COMPLETE_GOAL", id);
    } else {
      addEvent("UPDATE_STATUS", id);
    }
  };

  return (
    <GoalContext.Provider
      value={{
        goals,
        events,
        addGoal,
        deleteGoal,
        updateGoalStatus,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
};