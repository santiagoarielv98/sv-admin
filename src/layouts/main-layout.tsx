import { Outlet } from "react-router-dom";
import Sidebar, { DrawerHeader } from "../components/sidebar";
import Box from "@mui/material/Box";

const MainLayout = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default MainLayout;
