import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  Typography,
  Modal,
  TextField,
  Button,
} from "@mui/material";
import { dataStudent } from "../../data/dataStudent";
import { TypeStudentData } from "../../type/type";
import { Students } from "../students";
import "./studentList.css";

export const StudentsList = () => {
  const [students, setStudents] = useState<TypeStudentData[]>(dataStudent);
  const [selectedStudent, setSelectedStudent] =
    useState<TypeStudentData | null>(null);
  const [searchList, setSearchList] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState<TypeStudentData | null>(
    null
  );

  const handleEdit = (updatedStudent: TypeStudentData) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    if (selectedStudent?.id === updatedStudent.id) {
      setSelectedStudent(updatedStudent);
    }
    setIsEditModalOpen(false);
  };

  const handleDelete = (studentId: string) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== studentId)
    );
    if (selectedStudent?.id === studentId) {
      setSelectedStudent(null);
    }
  };

  const handleOpenEditModal = (student: TypeStudentData) => {
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

  const BoxInfoStudent = (item: TypeStudentData) => {
    setSelectedStudent(item);
  };

  const searchFunc = students.filter(
    (student) =>
      student.firstName.toLowerCase().includes(searchList.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchList.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchList.toLowerCase())
  );

  const DefaultView = () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          color: "#aab0ba",
          fontFamily: "Montserrat",
        }}
      >
        Select a student to view details
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", gap: 4, paddingY: 3 }}>
      <Box
        sx={{
          bgcolor: "white",
          maxHeight: "830px",
          overflow: "hidden",
          position: "relative",
        }}
        className="w-[450px] shadow-2xl rounded-xl"
      >
        <Box sx={{ position: "static" }}>
          <Typography
            sx={{
              fontSize: "25px",
              color: "#222d3b",
              fontWeight: 700,
              fontFamily: "Montserrat",
              paddingX: "20px",
              paddingTop: 2,
            }}
          >
            All Students List
          </Typography>
          <Box sx={{ marginBottom: 3, marginTop: 1, paddingX: "20px" }}>
            <input
              className="inputList w-[352px] px-3"
              type="text"
              placeholder="Search for student or ID"
              value={searchList}
              onChange={(e) => setSearchList(e.target.value)}
            />
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginY: 2,
              paddingX: "20px",
              position: "sticky",
              top: 0,
              height: "30px",
              bgcolor: "white",
              zIndex: 1,
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
            <Box sx={{ display: "flex", color: "#aab0ba" }}>
              <Typography sx={{ fontSize: "15px", fontFamily: "Montserrat" }}>
                Class
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            paddingBottom: "42px",
            height: "750px",
            overflowY: "scroll",
            paddingRight: "16px",
          }}
          className="scrollbar-hidden"
        >
          {searchFunc.map((item, index) => (
            <Box
              key={item.id}
              className={`${
                selectedStudent === item ? "bg-[#445569]" : ""
              } cursor-pointer`}
            >
              <Box className="p-3 px-5" onClick={() => BoxInfoStudent(item)}>
                <Box className="flex gap-3 justify-between">
                  <Box className="flex gap-2 ">
                    <Box>
                      <Avatar
                        src="/static/images/avatar/1.jpg"
                        className="mr-4"
                      />
                    </Box>
                    <Box className="flex gap-1 flex-col">
                      <Box className="flex gap-1">
                        <Typography
                          sx={{
                            color:
                              selectedStudent === item ? "white" : "#222d3b",
                            fontFamily: "Montserrat",
                          }}
                        >
                          {item.firstName}
                        </Typography>
                        <Typography
                          sx={{
                            color:
                              selectedStudent === item ? "white" : "#222d3b",
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
                          {item.studentId}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: selectedStudent === item ? "white" : "#222d3b",
                        fontFamily: "Montserrat",
                      }}
                    >
                      {item.class}
                    </Typography>
                    {/* <Button
                      sx={{ marginLeft: 2 }}
                      variant="contained"
                      color="primary"
                      onClick={() => handleOpenEditModal(item)}
                    >
                      Edit
                    </Button> */}
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ marginX: "20px" }} />
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ flex: 1 }}>
        {selectedStudent ? (
          <Students
            student={selectedStudent}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ) : (
          <DefaultView />
        )}
      </Box>

      {/* Edit Modal */}
      {/* <Modal open={isEditModalOpen} onClose={handleCloseEditModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Edit Student
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={editFormData?.firstName || ""}
              onChange={handleEditFormChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={editFormData?.lastName || ""}
              onChange={handleEditFormChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Student ID"
              name="studentId"
              value={editFormData?.studentId || ""}
              onChange={handleEditFormChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Class"
              name="class"
              value={editFormData?.class || ""}
              onChange={handleEditFormChange}
              margin="normal"
            />
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              color="primary"
              onClick={handleEditFormSubmit}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal> */}
    </Box>
  );
};
