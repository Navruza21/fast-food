import * as React from "react";
import { TypeTeacherData } from "../type/type";
import {
  CardContent,
  Typography,
  Avatar,
  Box,
  Button,
  MenuItem,
  Menu,
} from "@mui/material";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

interface TeacherProps {
  teacher: TypeTeacherData;
  onEdit: (student: TypeTeacherData) => void;
  onDelete: (studentId: string) => void;
}

export const Teacher: React.FC<TeacherProps> = ({
  teacher,
  onEdit,
  onDelete,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleClose();
    onEdit(teacher);
  };

  const handleDelete = () => {
    handleClose();
    onDelete(teacher.id);
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
      }}
      key={teacher.id}
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
                {teacher.firstName}
              </Typography>
              <Typography
                sx={{
                  fontSize: "27px",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                }}
              >
                {teacher.lastName}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Box sx={{ display: "flex", gap: 0.6 }}>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                  Subject:
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                  {teacher.subject}
                </Typography>
              </Box>
              <Box>
                <Typography>|</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 0.6 }}>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                  Teacher ID:
                </Typography>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                  {teacher.teacherId}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "420px",
                justifyContent: "flex-end",
              }}
            >
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                sx={{
                  color: "white",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  fontSize: "25px",
                }}
              >
                <HiDotsHorizontal />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleEdit}>
                  <MdModeEdit /> edit
                </MenuItem>
                <MenuItem onClick={handleDelete}>
                  <MdDelete /> delete
                </MenuItem>
              </Menu>
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
            <Typography sx={{ fontFamily: "Montserrat", fontSize: "23px" }}>
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
                      {teacher.gender}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ color: "#aab0ba", fontFamily: "Montserrat" }}
                    >
                      "Date of Birth"
                    </Typography>
                    <Typography sx={{ color: "#334153" }}>
                      {teacher.dataBirth}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ color: "#aab0ba", fontFamily: "Montserrat" }}
                    >
                      Address
                    </Typography>
                    <Typography sx={{ color: "#334153" }}>
                      {teacher.address}
                    </Typography>
                  </Box>
                </Box>

                <Box className="flex gap-14 mt-8">
                  <Box>
                    <Typography
                      sx={{ color: "#aab0ba", fontFamily: "Montserrat" }}
                    >
                      Email
                    </Typography>
                    <Typography sx={{ color: "#334153" }}>
                      {teacher.email}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "#aab0ba",

                        fontFamily: "Montserrat",
                      }}
                    >
                      Phone Number
                    </Typography>
                    <Typography sx={{ color: "#334153" }}>
                      {teacher.phoneNum}
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex gap-14 mt-8">
                  <Box>
                    <Typography
                      sx={{
                        color: "#aab0ba",

                        fontFamily: "Montserrat",
                      }}
                    >
                      Qualification
                    </Typography>
                    <Typography sx={{ color: "#334153" }}>
                      {teacher.qualification}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "#aab0ba",

                        fontFamily: "Montserrat",
                      }}
                    >
                      Experience
                    </Typography>
                    <Typography sx={{ color: "#334153" }}>
                      {teacher.experience}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{ bgcolor: "#445569", borderRadius: 2, color: "white" }}
            >
              Close
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Box>
  );
};
