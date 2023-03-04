import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { LogIn } from "pages/login/login";
import { NoMatch } from "pages/no-match";
import "./App.scss";

import { PrivateRoute } from "utils/routes";

const Users = lazy(() => import("pages/users/users"));
const UserDetails = lazy(() => import("pages/users/[id]"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LogIn />} />

        <Route path="/users" element={<PrivateRoute />}>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Suspense>
  );
}

export default App;
