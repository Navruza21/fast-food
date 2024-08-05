import { Box } from "@mui/material";
import { Assessment } from "./assessment";
import { LessonTopics } from "./lessonTopics";

export const Journal = () => {
  return (
    <Box>
      <Box>filter</Box>
      <Box>
        <Assessment />
        <LessonTopics />
      </Box>
    </Box>
  );
};
