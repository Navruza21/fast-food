import {
  Avatar,
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { TypeTeacherData } from "../../type/type";
import { Teacher } from "../teachers";
import { dataTeachers } from "../../data/dataTeacher";

export const TeacherList = () => {
  const [selectedTeacher, setSelectedTeacher] =
    useState<TypeTeacherData | null>(null);
  const [searchList, setSearchList] = useState("");
  const [teachers, setTeachers] = useState<TypeTeacherData[]>(dataTeachers);

  const BoxInfoStudent = (item: TypeTeacherData) => {
    setSelectedTeacher(item);
  };
  const searchFunc = dataTeachers.filter(
    (student) =>
      student.firstName.toLowerCase().includes(searchList.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchList.toLowerCase()) ||
      student.teacherId.toLowerCase().includes(searchList.toLowerCase())
  );

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState<TypeTeacherData | null>(
    null
  );

  const handleEdit = (updatedTeacher: TypeTeacherData) => {
    setTeachers((prevStudents) =>
      prevStudents.map((teacher) =>
        teacher.id === updatedTeacher.id ? updatedTeacher : teacher
      )
    );
    if (selectedTeacher?.id === updatedTeacher.id) {
      setSelectedTeacher(updatedTeacher);
    }
    setIsEditModalOpen(false);
  };

  const handleDelete = (teacherId: string) => {
    setTeachers((prevStudents) =>
      prevStudents.filter((teacher) => teacher.id !== teacherId)
    );
    if (selectedTeacher?.id === teacherId) {
      setSelectedTeacher(null);
    }
  };

  const handleOpenEditModal = (student: TypeTeacherData) => {
    setEditFormData(student);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditFormData(null);
  };

  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editFormData) {
      setEditFormData({ ...editFormData, [name]: value });
    }
  };

  const handleEditFormSubmit = () => {
    if (editFormData) {
      handleEdit(editFormData);
    }
  };

  const DefaultView = () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "790px",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          color: "#aab0ba",
          fontFamily: "Montserrat",
        }}
      >
        Select a teacher to view details
      </Typography>
    </Box>
  );
  return (
    <Box sx={{ display: "flex", gap: 4, paddingY: 3 }}>
      <Box
        sx={{ bgcolor: "white" }}
        className="w-[450px] shadow-2xl rounded-xl"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "127px",
            // justifyContent: selectedTeacher ? "left" : "space-between",
            // alignItems: selectedTeacher ? "flex-start" : "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
              color: "#222d3b",
              fontWeight: 700,
              fontFamily: "Montserrat",
              paddingX: "20px",
              marginTop: "15px",
            }}
          >
            Teachers
          </Typography>
          <Box
            sx={{
              marginBottom: selectedTeacher ? 3 : 0,
              marginTop: 1,
              paddingX: "20px",
            }}
          >
            <input
              className="inputList w-[352px] px-3"
              type="text"
              placeholder="Search for teacher or ID"
              value={searchList}
              onChange={(e) => setSearchList(e.target.value)}
            />
          </Box>
        </Box>
        <Divider />
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginY: 2,
              paddingX: "20px",
            }}
          >
            <Box sx={{ display: "flex", color: "#aab0ba", gap: 2 }}>
              <Typography sx={{ fontSize: "15px", fontFamily: "Montserrat" }}>
                Photo
              </Typography>
              <Typography sx={{ fontSize: "15px", fontFamily: "Montserrat" }}>
                Name
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                color: "#aab0ba",
                // gap: 2,
              }}
            >
              {/* <Typography sx={{ fontSize: "15px" }}>Student ID</Typography> */}
              <Typography sx={{ fontSize: "15px", fontFamily: "Montserrat" }}>
                Subject
              </Typography>
            </Box>
          </Box>
          {searchFunc.map((item, index) => (
            <Box
              className={`${
                selectedTeacher === item ? "bg-[#445569]" : ""
              } cursor-pointer`}
            >
              <Box
                key={item.id}
                className="p-3 px-5"
                onClick={() => BoxInfoStudent(item)}
              >
                <Box className="flex gap-3 justify-between">
                  <Box className="flex gap-2 ">
                    <Box>
                      <Avatar
                        src="/static/images/avatar/1.jpg"
                        className="mr-4"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                      }}
                      className="flex gap-1 flex-col"
                    >
                      <Box sx={{ display: "flex" }} className="flex gap-1">
                        <Typography
                          sx={{
                            color:
                              selectedTeacher === item ? "white" : "#222d3b",

                            fontFamily: "Montserrat",
                          }}
                        >
                          {item.firstName}
                        </Typography>
                        <Typography
                          sx={{
                            color:
                              selectedTeacher === item ? "white" : "#222d3b",

                            fontFamily: "Montserrat",
                          }}
                        >
                          {item.lastName}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: "#aab0ba",
                            fontSize: "13px",
                            fontFamily: "Montserrat",
                          }}
                        >
                          {item.teacherId}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: selectedTeacher === item ? "white" : "#222d3b",

                        fontFamily: "Montserrat",
                      }}
                    >
                      {item.subject}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ marginX: "20px" }} />
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        {selectedTeacher ? (
          <Teacher
            teacher={selectedTeacher}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ) : (
          <DefaultView />
        )}
      </Box>
    </Box>
  );
};
