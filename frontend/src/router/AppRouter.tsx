import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import CustomerDashboard from "../pages/CustomerDashboard";
import FeatureFlags from "../pages/FeatureFlags";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/admin/feature-flags" element={<FeatureFlags />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;