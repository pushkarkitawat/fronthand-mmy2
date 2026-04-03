import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const Comp0 = lazy(() => import("./Admin/bluebuslogin.jsx"));
const Comp1 = lazy(() => import("./Admin/bluebusdasboard.jsx"));
const Comp2 = lazy(() => import("./Admin/bluebusbooktickect.jsx"));
const Comp3 = lazy(() => import("./Admin/ManageBooking.jsx"));
const Comp4 = lazy(() => import("./Admin/register.jsx"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Comp0 />} />
          <Route path="/dashboard" element={<Comp1 />} />
          <Route path="/book-ticket" element={<Comp2 />} />
          <Route path="/manage-ticket" element={<Comp3 />} />
          <Route path="/register" element={<Comp4 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
