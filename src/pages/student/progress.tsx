import React from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { TypeStudentData } from "../../type/type";
import "./progress.css";
interface TestScore {
  test: string;
  score: number;
}

interface ProgressData {
  math: TestScore[];
  english: TestScore[];
  history: TestScore[];
  physics: TestScore[];
}

const ProgressBox: React.FC<{ student: TypeStudentData }> = ({ student }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const progressData: ProgressData = student.progress;

  const subjects = Object.keys(progressData) as (keyof ProgressData)[];

  const averageScores: { [key: string]: number } = {};

  subjects.forEach((subject) => {
    const scores = progressData[subject].map((test) => test.score);
    const totalScore = scores.reduce(
      (acc: number, score: number) => acc + score,
      0
    );
    averageScores[subject] = totalScore / scores.length;
  });

  return (
    <div className="px-6">
      <Box
        sx={{
          width: "100%",
          border: "2px solid #dce2ef",
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            bgcolor: "#dce2ef",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {subjects.map((subject, index) => (
            <Tab
              sx={{
                bgcolor: " white",
                marginX: 0.2,
                marginY: 0.4,
                width: "185px",
                BorderRadiusTopleft: 4,
                BorderRadiusTopRight: 4,
              }}
              key={index}
              label={subject}
            />
          ))}
        </Tabs>
        {subjects.map((subject, index) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TabPanel key={index} value={value} index={index}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={progressData[subject]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="test" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </TabPanel>
          </Box>
        ))}
      </Box>
    </div>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default ProgressBox;
