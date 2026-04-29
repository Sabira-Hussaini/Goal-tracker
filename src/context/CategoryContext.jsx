import { createContext, useState, useEffect } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState(() => {
    return JSON.parse(localStorage.getItem("categories")) || [];
  });

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);
  const addCategory = (category) => {
    setCategories((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: category.name.trim(),
        goals: [],
      },
    ]);
  };
  const addGoalToCategory = (categoryName, goal) => {
    setCategories((prev) =>
      prev.map((cat) => {
        if (cat.name !== categoryName) return cat;

        return {
          ...cat,
          goals: [...cat.goals, goal],
        };
      })
    );
  };

  const deleteCategory = (id) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        addCategory,
        deleteCategory,
        addGoalToCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};