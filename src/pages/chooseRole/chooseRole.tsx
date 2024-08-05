import React, { useState } from "react";
import { Box, Button, Icon, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudent } from "react-icons/pi";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import { PiStudentFill } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import "./chooseRole.css";

const dataChooseRole = [
  {
    text: "Teacher",
    icon: <LiaChalkboardTeacherSolid />,
  },
  { text: "Student", icon: <PiStudent /> },
  { text: "Parent", icon: <PiStudent /> },
];
// class: hamma classlar ichiga kirganda nechta qiz va ogil bola alo orta va 2chilar nechtaligi sinfda
export const ChooseRole = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string>("");

  const ChooseRoleBtn = (role: string) => {
    if (role === "Teacher") {
      navigate("/TeacherSignIn");
      setSelectedRole("Teacher");
    } else if (role === "Student") {
      navigate("/StudentSignIn");
      setSelectedRole("Student");
    } else if (role === "Admin") {
      navigate("/ParentSignIn");
      setSelectedRole("Admin");
    }
  };

  return (
    <Box
      className="chooseRoleCont"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            textAlign: "left",
            flexDirection: "column",
            width: "480px",
            height: "150px",
            paddingTop: 2,
          }}
        >
          <Box
            sx={{
              marginBottom: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "46px",
                fontWeight: 700,
                fontFamily: "Montserrat",
                color: "rgb(68, 85, 105)",
              }}
            >
              Sign in
            </Typography>
            <Box
              sx={{ width: "90px", height: "2px", bgcolor: "rgb(68, 85, 105)" }}
            ></Box>
          </Box>
          <Typography
            sx={{
              fontSize: "28px",
              fontFamily: "Montserrat",
              color: "rgb(68, 85, 105)",
            }}
          >
            Who are you?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            sx={{
              cursor: "pointer",
              height: "150px",
              width: "150px",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            className={`bgcolor-[rgb(68, 85, 105)] hover:bg-slate-900  shadow-2xl ${
              selectedRole === "Teacher" ? "cardChooseRole" : "notSelectedRole"
            } `}
            value={selectedRole}
            onClick={() => ChooseRoleBtn("Teacher")}
          >
            <Icon sx={{ fontSize: "100px", color: "white" }}>
              <LiaChalkboardTeacherSolid />
            </Icon>
            <Typography
              sx={{
                color: "white",
                fontSize: "20px",
                fontFamily: "Montserrat",
              }}
            >
              Teacher
            </Typography>
          </Button>
          <Button
            sx={{
              cursor: "pointer",
              height: "150px",
              width: "150px",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            className={`bgcolor-[rgb(68, 85, 105)] hover:bg-slate-900  shadow-2xl ${
              selectedRole === "Student" ? "cardChooseRole" : "notSelectedRole"
            } `}
            value={selectedRole}
            onClick={() => ChooseRoleBtn("Student")}
          >
            <Icon sx={{ fontSize: "100px", color: "white" }}>
              <PiStudentFill />
            </Icon>
            <Typography
              sx={{
                color: "white",
                fontSize: "20px",
                fontFamily: "Montserrat",
              }}
            >
              Student
            </Typography>
          </Button>
          <Button
            sx={{
              cursor: "pointer",
              height: "150px",
              width: "150px",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            className={`bgcolor-[rgb(68, 85, 105)] hover:bg-slate-900  shadow-2xl ${
              selectedRole === "Admin" ? "cardChooseRole" : "notSelectedRole"
            } `}
            value={selectedRole}
            onClick={() => ChooseRoleBtn("Admin")}
          >
            <Icon sx={{ fontSize: "100px", color: "white", height: "100px" }}>
              <FiUser />
            </Icon>
            <Typography
              sx={{
                color: "white",
                fontSize: "20px",
                fontFamily: "Montserrat",
              }}
            >
              Admin
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box className="">
        <Outlet />
      </Box>
    </Box>
  );
};
