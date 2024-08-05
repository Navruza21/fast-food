import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function StudentSignIn() {
  const navigate = useNavigate();
  const HandleTeacherDash = () => {
    navigate("/layout");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        paddingX: 2,
        paddingY: 3,
        borderRadius: 3,
        flexDirection: "column",
        gap: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <input
            type="text"
            placeholder="User name"
            className="h-[50px] w-[460px] rounded-xl shadow-xl p-2"
          />
          <input
            type="text"
            placeholder="Student ID"
            className="h-[50px] w-[460px] rounded-xl shadow-xl p-2"
          />
          <input
            type="text"
            placeholder="password"
            className="h-[50px] w-[460px] rounded-xl shadow-xl p-2"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignContent: "center",
          alignItems: "center",
          width: "460px",
        }}
      >
        <Button
          sx={{ bgcolor: "#445569", borderRadius: 2, color: "white" }}
          onClick={HandleTeacherDash}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default StudentSignIn;
