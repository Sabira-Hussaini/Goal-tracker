import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import NewGoal from "./pages/NewGoal";
import GoalDetails from "./pages/GoalDetails";
import Categories from "./pages/Categories";
import Settings from "./pages/Settings";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* صفحه اصلی */}
          <Route index element={<Dashboard />} />

          {/* صفحات */}
          <Route path="goals" element={<Goals />} />
          <Route path="categories" element={<Categories />} />
          <Route path="setting" element={<Settings />} />

          {/* داینامیک */}
          <Route path="goals/:id" element={<GoalDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;