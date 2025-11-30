import React from "react";
import { ClassList, AssignmentList, AssignmentDetail } from  "./features/classes";

const App = () => (
  <div style={{ display: "flex", height: "100vh" }}>
    <ClassList />
    <AssignmentList />
    <AssignmentDetail />
  </div>
);

export default App;
