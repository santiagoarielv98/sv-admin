import ListItemButton from "@mui/material/ListItemButton";
import usePathname from "../../hooks/use-pathname";
import RouterLink from "./router-link";
import React from "react";

import { MenuItem } from "./configs";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

const NavItem: React.FC<{ item: MenuItem; open: boolean }> = ({ item, open }) => {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton
        {...(item.path !== undefined && {
          component: RouterLink,
          href: item.path,
        })}
        selected={active}
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0, textTransform: "capitalize" }} />
      </ListItemButton>
    </ListItem>
  );
};

export default NavItem;
