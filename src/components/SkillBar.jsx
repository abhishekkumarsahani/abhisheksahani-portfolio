import { Box, LinearProgress, Typography } from "@mui/material";

const SkillBar = ({ skill, value }) => {
  return (
    <Box mb={2}>
      <Typography>{skill}</Typography>
      <LinearProgress variant="determinate" value={value} />
    </Box>
  );
};

export default SkillBar;
