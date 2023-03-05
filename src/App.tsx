import { Routes, Route } from "react-router-dom";
import { LogIn } from "pages/login/login";
import { NoMatch } from "pages/no-match";
import { PrivateRoute } from "utils/routes";
import "./App.scss";
import { Users } from "pages/users/users";
import { UserDetails } from "pages/users/[id]";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />

      <Route path="/users" element={<PrivateRoute />}>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Route>

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
