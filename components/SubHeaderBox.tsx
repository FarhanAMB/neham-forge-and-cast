import { Box, Typography } from "@mui/material";

interface SubHeaderBoxProps {
  title: string;
}

export default function SubHeaderBox({ title }: SubHeaderBoxProps) {
  return (
    <Box bgcolor={"Cgray.main"} className="my-2 p-4">
      <Typography variant="h1" sx={{ textAlign: "left", padding: 5 }}>
        {title}
      </Typography>
    </Box>
  );
}
