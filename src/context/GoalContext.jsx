import { createContext, useState, useEffect } from "react";
import { getGoals, saveGoals } from "../utils/storage";

export const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  
  const [goals, setGoals] = useState([]);
  const [events, setEvents] = useState([]);

 
  useEffect(() => {
    setGoals(getGoals());

    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

 
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
    setGoals((prev) => [...prev, goal]);

    addEvent("CREATE_GOAL", goal.id);
  };

  const updateGoal = (id, updatedGoal) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? updatedGoal : g))
    );

  
    if (updatedGoal.completed) {
      addEvent("COMPLETE_GOAL", id);
    }
  };

  const deleteGoal = (id) => {
    setGoals((prev) => prev.filter((g) => g.id !== id));

    addEvent("DELETE_GOAL", id);
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
      }}
    >
      {children}
    </GoalContext.Provider>
  );
};