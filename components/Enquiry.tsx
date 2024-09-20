"use client";
import { Box, Button, Drawer } from "@mui/material";
import { useState } from "react";

export default function Enquiry() {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawer(open);
    };
  return (
    <main>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "secondary.main",
          color: "info.main",
          position: "fixed",
          left: "100%",
          bottom: "20%",
          transformOrigin: "0% 0%",
          WebkitTransform: "rotate(90deg)",
          MozTransform: "rotate(90deg)",
          OTransform: "rotate(90deg)",
          msTransform: "rotate(90deg)",
          transform: "rotate(90deg) translateX(-50%)",
          zIndex: 10,
        }}
        onClick={toggleDrawer(true)}
      >
        Enquiry
      </Button>
      <Drawer
        anchor="right"
        open={drawer}
        onClose={toggleDrawer(false)}
        sx={{ zIndex: 20 }}
      >
        <Box sx={{ width: 400, padding: 2 }}>
          <h1>Enquiry Form</h1>
          <p>Form goes here</p>
        </Box>
      </Drawer>
    </main>
  );
}
