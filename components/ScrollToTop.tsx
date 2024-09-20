"use client";
import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState("0");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (scrollY > 600) {
      setShowButton("1");
    } else {
      setShowButton("0");
    }
  }, [scrollY]);

  const scrollToTop = () => {
    if (showButton === "1") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <IconButton
      sx={{
        position: "fixed",
        bottom: 10,
        right: 10,
        zIndex: 100,
        borderRadius: "100%",
        backgroundColor: "secondary.main",
        boxShadow: 8,
        opacity: showButton,
        color: "info.main",
      }}
      size="large"
      onClick={scrollToTop}
    >
      <KeyboardArrowUpIcon />
    </IconButton>
  );
}
