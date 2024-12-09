import React from "react";
import KanbanBoard from "../components/KanbanBoard";
import { useLocation } from "react-router-dom";

const ScreeningSchedule = () => {
  const state = useLocation();
  return (
    <div className="w-full overflow-x-scroll scroll-m-2 ">
      <KanbanBoard state={state} />;
    </div>
  );
};

export default ScreeningSchedule;