import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, Outlet } from "react-router-dom";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Avatar, Divider, Typography } from "@mui/material";
import { Header } from "../../pages/header";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const overview = [
  { text: "Dashboard", path: "/layout", icon: <TbLayoutDashboardFilled /> },
  { text: "Classes", path: "/layout/classes", icon: <SiGoogleclassroom /> },
  {
    text: "Students",
    path: "/layout/students",
    icon: <PiStudentFill />,
  },
  {
    text: "Teachers",
    path: "/layout/teachers",
    icon: <FaChalkboardTeacher />,
  },
];

export default function Layout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activePage, setActivePage] = React.useState("/layout");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", overflow: "hidden" }}>
      <Box sx={{ width: "200px", bgcolor: "#445569", minHeight: "100vh" }}>
        <Box>
          <Typography
            sx={{
              fontSize: "30px",
              paddingX: 4,
              paddingY: 3,
              color: "white",
              fontFamily: "Montserrat",
              fontWeight: 700,
            }}
          >
            School
          </Typography>
        </Box>
        <Divider sx={{ marginX: 2, borderColor: "#a3b1d0" }} />
        <List sx={{ paddingX: 2, paddingY: 3 }}>
          {overview.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                display: "block",
                color: "white",
              }}
            >
              <ListItemButton
                component={NavLink}
                to={item.path}
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  gap: 1,
                  bgcolor: activePage === item.path ? "white" : "inherit",
                  color: activePage === item.path ? "black" : "white",
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: "inherit", // Remove background color change on hover
                  },
                }}
                onClick={() => setActivePage(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    color: activePage === item.path ? "black" : "white",
                    fontSize: "28px",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    fontSize: "28px",
                    fontWeight: 700,
                  }}
                  primary={item.text}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box
        component="main"
        sx={{
          paddingX: 3,
          bgcolor: "rgb(241, 244, 250)",
          width: "1350px",
        }}
      >
        <DrawerHeader
          sx={{ boxShadow: 3, bgcolor: "white", borderRadius: 3, marginY: 2 }}
        >
          <Avatar src="/static/images/avatar/1.jpg" className="mr-4" />
        </DrawerHeader>
        <Outlet />
      </Box>
    </Box>
  );
}
