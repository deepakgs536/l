import { Outlet } from "react-router-dom";
import { AppShell } from "./app-shell";

export const RootLayout = () => {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
};
