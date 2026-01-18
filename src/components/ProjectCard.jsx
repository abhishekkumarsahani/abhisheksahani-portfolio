import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{project.title}</Typography>
        <Typography variant="body2" mb={1}>
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button size="small" href={project.github} target="_blank">
            GitHub
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
