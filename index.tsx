import React, { useState } from "react";
import { Modal, TextField, Button, Box, Typography } from "@mui/material";
import { FaEllipsisV } from "react-icons/fa";
import { ParentsList } from "./parents";
// import "./App.css"; // Make sure Tailwind CSS is imported in your main CSS file

// Define the type for parent data
interface Parent {
  id: number;
  fullName: string;
  child: string;
  class: string;
  phone: string;
  address: string;
  relation: string;
}

// Sample initial data
const initialData: Parent[] = [
  {
    id: 1,
    fullName: "Ota Ona 1",
    child: "Oquvchi 11",
    class: "1-'A'",
    phone: "123456789",
    address: "Address 1",
    relation: "Otasi",
  },
  // Add more sample data as needed
];

export const ParentsTable: React.FC = () => {
  const [parents, setParents] = useState<Parent[]>(initialData);
  const [searchList, setSearchList] = useState<string>("");
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [editFormData, setEditFormData] = useState<Parent | null>(null);

  const handleEdit = (updatedParent: Parent) => {
    setParents((prevParents) =>
      prevParents.map((parent) =>
        parent.id === updatedParent.id ? updatedParent : parent
      )
    );
    setIsEditModalOpen(false);
  };

  const handleDelete = (parentId: number) => {
    setParents((prevParents) =>
      prevParents.filter((parent) => parent.id !== parentId)
    );
  };

  const handleOpenEditModal = (parent: Parent) => {
    setEditFormData(parent);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditFormData(null);
  };

  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditFormData((prevFormData) =>
      prevFormData ? { ...prevFormData, [name]: value } : null
    );
  };

  const handleEditFormSubmit = () => {
    if (editFormData) {
      handleEdit(editFormData);
    }
  };

  const filteredParents = parents.filter(
    (parent) =>
      parent.fullName.toLowerCase().includes(searchList.toLowerCase()) ||
      parent.child.toLowerCase().includes(searchList.toLowerCase()) ||
      parent.class.toLowerCase().includes(searchList.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Yangi ota-ona qo'shish
        </button>
        <input
          type="text"
          placeholder="Search"
          value={searchList}
          onChange={(e) => setSearchList(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">F.I.Sh</th>
            <th className="px-4 py-2 border">Farzand</th>
            <th className="px-4 py-2 border">Sinf</th>
            <th className="px-4 py-2 border">Telefon</th>
            <th className="px-4 py-2 border">Manzili</th>
            <th className="px-4 py-2 border">Ota/Ona</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredParents.map((parent, index) => (
            <tr key={parent.id}>
              <td className="px-4 py-2 border">{index + 1}</td>
              <td className="px-4 py-2 border">{parent.fullName}</td>
              <td className="px-4 py-2 border">{parent.child}</td>
              <td className="px-4 py-2 border">{parent.class}</td>
              <td className="px-4 py-2 border">{parent.phone}</td>
              <td className="px-4 py-2 border">{parent.address}</td>
              <td className="px-4 py-2 border">{parent.relation}</td>
              <td className="px-4 py-2 border flex justify-center">
                <FaEllipsisV
                  onClick={() => handleOpenEditModal(parent)}
                  className="cursor-pointer mx-2"
                />
                <FaEllipsisV
                  onClick={() => handleDelete(parent.id)}
                  className="cursor-pointer mx-2"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditModalOpen && editFormData && (
        <Modal open={isEditModalOpen} onClose={handleCloseEditModal}>
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
              Edit Parent
            </Typography>
            <Box component="form" sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={editFormData.fullName}
                onChange={handleEditFormChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Child"
                name="child"
                value={editFormData.child}
                onChange={handleEditFormChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Class"
                name="class"
                value={editFormData.class}
                onChange={handleEditFormChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={editFormData.phone}
                onChange={handleEditFormChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={editFormData.address}
                onChange={handleEditFormChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Relation"
                name="relation"
                value={editFormData.relation}
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
        </Modal>
      )}
    </div>
  );
};
