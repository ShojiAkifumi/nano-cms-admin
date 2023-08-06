import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Create from "./pages/Create";
import Reports from "./pages/Reports";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="edit" element={<Edit />} />
          <Route path="create" element={<Create />} />
          <Route path="reports" element={<Reports />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
