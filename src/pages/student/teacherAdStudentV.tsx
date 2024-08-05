import * as React from "react";
import { TypeStudentData } from "../../type/type";
import {
  CardContent,
  Typography,
  Avatar,
  Box,
  Icon,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import ProgressBox from "./progress";
import { HiDotsHorizontal } from "react-icons/hi";

interface StudentProps {
  student: TypeStudentData;
}

export const TeacherViewStudent: React.FC<StudentProps> = ({ student }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
      }}
      key={student.id}
      className="flex  flex-col shadow-xl  rounded-b-xl  bg-white  rounded-t-xl  w-[800px]"
    >
      <Box className="  rounded-b-xl  bg-white  rounded-t-xl  w-[800px]">
        <div className="flex items-center bg-[#445569] rounded-t-xl px-3 py-4 text-white ">
          <Avatar src="/static/images/avatar/1.jpg" className="mr-4" />
          <div>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography
                sx={{
                  fontSize: "27px",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                }}
              >
                {student.firstName}
              </Typography>
              <Typography
                sx={{
                  fontSize: "27px",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                }}
              >
                {student.lastName}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Box sx={{ display: "flex", gap: 0.6 }}>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                  Class:
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                  {student.class}
                </Typography>
              </Box>
              <Box>
                <Typography>|</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 0.6 }}>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                  Student ID:
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                  {student.studentId}
                </Typography>
              </Box>
            </Box>
          </div>
        </div>
        <CardContent sx={{ bgcolor: "white" }}>
          <Box
            className="mb-4 "
            sx={{
              border: "1px solid #dce2ef",
              borderRadius: 4,
              paddingX: 3,
              paddingY: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "23px",
                color: "#334153",
              }}
            >
              Basic Details
            </Typography>
            <Box>
              <Box sx={{ marginTop: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start",
                      alignItems: "start",
                    }}
                  >
                    <Typography
                      sx={{
                        margin: 0,
                        color: "#aab0ba",
                        fontFamily: "Montserrat",
                      }}
                    >
                      Gender
                    </Typography>
                    <Typography sx={{ color: "#334153" }}>
                      {student.gender}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ color: "#aab0ba", fontFamily: "Montserrat" }}
                    >
                      "Date of Birth"
                    </Typography>
                    <Typography sx={{ color: "#334153" }}>
                      {student.dataBirth}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ color: "#aab0ba", fontFamily: "Montserrat" }}
                    >
                      Address
                    </Typography>
                    <Typography sx={{ color: "#334153" }}>
                      {student.address}
                    </Typography>
                  </Box>
                </Box>

                <Box className="flex gap-8 mt-6">
                  <Box>
                    <Typography
                      sx={{ color: "#aab0ba", fontFamily: "Montserrat" }}
                    >
                      {" "}
                      Mother
                    </Typography>
                    <Typography sx={{ color: "#334153" }}>
                      {`${student.mFirstN} ${student.mlastN}`}
                    </Typography>
                    <Typography sx={{ color: "#334153" }}>
                      {student.mPhoneNum}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "#aab0ba",

                        fontFamily: "Montserrat",
                      }}
                    >
                      Father
                    </Typography>
                    <Typography sx={{ color: "#334153" }}>
                      {`${student.fFirstN} ${student.flastN} `}
                    </Typography>
                    <Typography sx={{ color: "#334153" }}>
                      ${student.fPhoneNum}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Box>
      <div className="mb-4">
        <ProgressBox student={student} />
      </div>
    </Box>
  );
};
