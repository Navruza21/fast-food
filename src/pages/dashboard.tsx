import TableContainer from "@mui/material/TableContainer";
import { Box, Icon, Typography } from "@mui/material";
import { dataStudent } from "../data/dataStudent";
import { dataTeachers } from "../data/dataTeacher";
import { PiStudentFill } from "react-icons/pi";
import { dataEmployee } from "../data/employee";
import { FaChalkboardTeacher } from "react-icons/fa";
// import { PieChart } from "recharts";
import { PieChart } from "@mui/x-charts/PieChart";

const allStudents = dataStudent.map((item) => item.id);
const lengthStudent = allStudents.length;

const dataTeachersT = dataTeachers.map((item) => item.id);
const lenghtT = dataTeachersT.length;

const dataEmploye = dataEmployee.map((item) => item.id);
const lenghtEmployee = dataEmploye.length;
const LenghtEmpl = lenghtT + lenghtEmployee;

const maleStud = dataStudent.filter((item) => item.gender === "Male");
console.log(maleStud.length);
const maleStudents = maleStud.length;

const femaleStud = dataStudent.filter((item) => item.gender === "Female");
console.log(femaleStud.length);
const femaleStudents = femaleStud.length;
export function Dashboard() {
  return (
    <TableContainer>
      <Box>
        <Box sx={{ display: "flex", padding: 3, gap: 3 }}>
          <Box
            sx={{
              bgcolor: "white",
              boxShadow: 6,
              borderRadius: 4,
              padding: 3,
              height: "120px",
              display: "flex",
              // flexDirection: "column",
              textAlign: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                borderRight: "1px solid #dce2ef",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon sx={{ marginRight: 2, fontSize: "20px" }}>
                <PiStudentFill />
              </Icon>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: 23,
                  fontWeight: 700,
                  fontFamily: "Montserrat",
                  color: "#334153",
                }}
              >
                Students
              </Typography>
              <Typography
                sx={{
                  fontSize: 23,
                  fontWeight: 700,
                  fontFamily: "Montserrat",
                  color: "#334153",
                }}
              >
                {lengthStudent}
              </Typography>
            </Box>
          </Box>
          {/* --------- */}
          <Box
            sx={{
              bgcolor: "white",
              boxShadow: 6,
              borderRadius: 4,
              padding: 3,
              height: "120px",
              display: "flex",
              // flexDirection: "column",
              textAlign: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                borderRight: "1px solid #dce2ef",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon sx={{ marginRight: 2, fontSize: "20px" }}>
                <FaChalkboardTeacher />
              </Icon>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: 23,
                  fontWeight: 700,
                  fontFamily: "Montserrat",
                  color: "#334153",
                }}
              >
                Teachers
              </Typography>
              <Typography
                sx={{
                  fontSize: 23,
                  fontWeight: 700,
                  fontFamily: "Montserrat",
                  color: "#334153",
                }}
              >
                {lenghtT}
              </Typography>
            </Box>
          </Box>
          {/* ----------------- */}
          <Box
            sx={{
              bgcolor: "white",
              boxShadow: 6,
              borderRadius: 4,
              padding: 3,
              height: "120px",
              display: "flex",
              // flexDirection: "column",
              textAlign: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                borderRight: "1px solid #dce2ef",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon sx={{ marginRight: 2, fontSize: "20px" }}>
                <PiStudentFill />
              </Icon>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: 23,
                  fontWeight: 700,
                  fontFamily: "Montserrat",
                  color: "#334153",
                }}
              >
                Employee
              </Typography>
              <Typography
                sx={{
                  fontSize: 23,
                  fontWeight: 700,
                  fontFamily: "Montserrat",
                  color: "#334153",
                }}
              >
                {LenghtEmpl}
              </Typography>
            </Box>
          </Box>
          {/* ---------- */}
        </Box>
        <Box sx={{ padding: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 4,
              border: "1px solid #dce2ef",
              mt: 3,
              bgcolor: "white",
              boxShadow: 6,
              height: "300px",
              width: "400px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography>Students</Typography>
            </Box>
            <PieChart
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: femaleStudents,
                      label: "Female",
                      color: "#e8cbe4",
                    },
                    {
                      id: 1,
                      value: maleStudents,
                      label: "Male",
                      color: "#c7d7f9",
                    },
                  ],
                },
              ]}
              width={300}
              height={200}
              legend={
                {
                  // alignI: "center",
                  // verticalAlign: "middle",
                  // layout: "vertical",
                  // itemStyle: {
                  //   fontSize: "14px",
                  //   fontWeight: "500",
                  //   fontFamily: "Montserrat",
                  // },
                }
              }
            />
          </Box>
        </Box>
      </Box>
    </TableContainer>
  );
}
