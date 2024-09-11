"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Products from "@/components/Products";
import Policies from "@/components/Policies";
import Updated from "@/components/Updated";
import Footer from "@/components/Footer";
import { Box, Button, Drawer } from "@mui/material";

export default function Home() {
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
      <Header />
      <Carousel />
      <Products />
      <Policies />
      <Updated />
      <Footer />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFD66F",
          color: "black",
          position: "fixed",
          left: "100%",
          bottom: "25%",
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
        sx={{ zIndex: 10 }}
      >
        <Box sx={{ width: 400, padding: 2 }}>
          <h1>Enquiry Form</h1>
          <p>Form goes here</p>
        </Box>
      </Drawer>
    </main>
  );
}
