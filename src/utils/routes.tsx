import { Layout } from "components/layout/layout";
import { Outlet } from "react-router-dom";

export function PrivateRoute() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
